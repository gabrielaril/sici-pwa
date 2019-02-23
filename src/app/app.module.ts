import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonasComponent} from './personas/personas.component';
import { LoggingService } from './LoggingServise.service';
import { PersonasService } from './PersonasService.service';
import { UsuarioService } from './services/UsuarioService.service';

import { AppRoutingModule } from './app-routing.module';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaComponent } from './lista/lista.component';
import { ListaDetailComponent } from './lista-detail/lista-detail.component';
import { ListaInfoComponent } from './lista-info/lista-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    FormularioComponent,    
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    UsuarioComponent,
    ListaComponent,
    ListaDetailComponent,
    ListaInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoggingService, PersonasService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
