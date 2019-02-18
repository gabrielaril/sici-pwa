import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingServise.service';
import { PersonasService } from '../../PersonasService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombreInput: string;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingServise: LoggingService, private personasService: PersonasService) {
    this.personasService.saludar.subscribe((index: number) => alert('El indice es ' + index));
   }

  onAgregar(apellidoInput: HTMLInputElement) {
    const persona = new Persona (this.nombreInput, this.apellidoInput.nativeElement.value);
    this.loggingServise.mostrarMensaje('Hola');
    this.personasService.agregarPersona(persona);
  }
}
