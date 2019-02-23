export class Dependencia{
    conac: string;
    entidad: string; 
    id: number;
    nombre: string;

    constructor(conac: string, entidad: string, 
                id: number,  nombre: string) {
        this.conac = conac;
        this.entidad = entidad;
        this.id = id;
        this.nombre = nombre;
    }

}