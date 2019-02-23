// Utilidades para grabar PouchDB
//const db = new PouchDB('mensajes');

const STATIC_CACHE    = 'static-v1';
const DYNAMIC_CACHE   = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';


const APP_SHELL = [
    '/',
    'index.html',
    'runtime.js',
    'polyfills.js',
    'styles.js',
    'main.js',
    'scripts.js',
    'vendor.js'

];

const APP_SHELL_INMUTABLE = [
];

self.addEventListener('install', e => {

    const cacheStatic = caches.open( STATIC_CACHE ).then(cache => 
        cache.addAll( APP_SHELL ));

    const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache => 
        cache.addAll( APP_SHELL_INMUTABLE ));

    e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ]));
});


self.addEventListener('activate', e => {

    const respuesta = caches.keys().then( keys => {
        keys.forEach( key => {
            if (  key !== STATIC_CACHE && key.includes('static') ) {
                return caches.delete(key);
            }
            if (  key !== DYNAMIC_CACHE && key.includes('dynamic') ) {
                return caches.delete(key);
            }
        });
    });

    e.waitUntil( respuesta );
});

self.addEventListener( 'fetch', e => {

    let respuesta;

    if(e.request.url.includes('/api')){
        respuesta =  manejoApiMensajes(DYNAMIC_CACHE,e.request);
    }else{        
        respuesta = caches.match( e.request ).then( res => {
            if ( res ) {                
                actualizaCacheStatico( STATIC_CACHE, e.request, APP_SHELL_INMUTABLE );
                return res;
            } else {
                return fetch( e.request ).then( newRes => {
                    return actualizaCacheDinamico( DYNAMIC_CACHE, e.request, newRes );

                });
            }
        });
    }

    e.respondWith( respuesta );
});

// Guardar  en el cache dinamico
function actualizaCacheDinamico( dynamicCache, req, res ) {
    if ( res.ok ) {

        return caches.open( dynamicCache ).then( cache => {
            cache.put( req, res.clone() );            
            return res.clone();
        });

    } else {
        return res;
    }

}

// Cache with network update
function actualizaCacheStatico( staticCache, req, APP_SHELL_INMUTABLE ) {
    if ( APP_SHELL_INMUTABLE.includes(req.url) ) {
        // No hace falta actualizar el inmutable
        // console.log('existe en inmutable', req.url );

    } else {
        // console.log('actualizando', req.url );
        return fetch( req )
                .then( res => {
                    return actualizaCacheDinamico( staticCache, req, res );
                });
    }
}


// Network with cache fallback / update
function manejoApiMensajes( cacheName, req ) {

    if ( req.clone().method === 'POST' ) {
        // POSTEO de un nuevo mensaje

        if ( self.registration.sync ) {
            return req.clone().text().then( body =>{
    
                // console.log(body);
                const bodyObj = JSON.parse( body );
                return guardarMensaje( bodyObj );
    
            });
        } else {
            return fetch( req );
        }

    } else {

        return fetch( req ).then( res => {
    
            if ( res.ok ) {
                actualizaCacheDinamico( cacheName, req, res.clone() );
                return res.clone();
            } else {
                return caches.match( req );
            }
      
        }).catch( err => {
            return caches.match( req );
        });
    }
}

function guardarMensaje( mensaje ) {

    mensaje._id = new Date().toISOString();
    return db.put( mensaje ).then( () => {
        self.registration.sync.register('nuevo-post');
        const newResp = { ok: true, offline: true };
        return new Response( JSON.stringify(newResp));
    });

}

// Postear mensajes a la API
/*function postearMensajes() {

    const posteos = [];

    return db.allDocs({ include_docs: true }).then( docs => {
        docs.rows.forEach( row => {
            const doc = row.doc;
            const fetchPom =  fetch('api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( doc )
                }).then( res => {
                    return db.remove( doc );
                });
            
            posteos.push( fetchPom );
        }); // fin del foreach

        return Promise.all( posteos );
    });
}*/

