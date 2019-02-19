import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingServise.service';
import { PersonasService } from '../../PersonasService.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  nombreInput: string;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  index: number;
  modoEdicion: number;

   constructor(private loggingServise: LoggingService,
               private personasService: PersonasService,
               private router: Router,
               private route: ActivatedRoute) {
    this.personasService.saludar.subscribe((index: number) => alert('El indice es ' + index));
   }

   ngOnInit(): void {
    this.index = this.route.snapshot.params.id;
    this.modoEdicion = +this.route.snapshot.queryParams.modoEdicion;
    if (this.modoEdicion != null && this.modoEdicion === 1) {
        const persona: Persona = this.personasService.buscarPersona(this.index);
        this.nombreInput = persona.nombre;
        this.apellidoInput.nativeElement.value = persona.apellido;
      }
    }

    onGuardarPersona(apellidoInput: HTMLInputElement) {
    const persona = new Persona (this.nombreInput, this.apellidoInput.nativeElement.value);
    if (this.modoEdicion != null && this.modoEdicion === 1) { // edicion
      this.personasService.modificarPersona(this.index, persona);
    } else {
      this.personasService.agregarPersona(persona);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    this.personasService.eliminarPersona(this.index);
    this.router.navigate(['personas']);
  }
}
