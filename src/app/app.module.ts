import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonasComponent} from './personas/personas.component';
import { LoggingService } from './LoggingServise.service';
import { PersonasService } from './PersonasService.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    FormularioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
