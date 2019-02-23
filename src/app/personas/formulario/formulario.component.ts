import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef , Input} from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingServise.service';
import { PersonasService } from '../../PersonasService.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
<<<<<<< HEAD

export class FormularioComponent implements OnInit {
=======
export class FormularioComponent {
  
>>>>>>> cf962689184895ac8982e84330fad5ac84e33c6e
  nombreInput: string;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  index: number;
  modoEdicion: number;

<<<<<<< HEAD
   constructor(private loggingServise: LoggingService,
               private personasService: PersonasService,
               private router: Router,
               private route: ActivatedRoute) {
=======
  constructor(private loggingServise: LoggingService, private personasService: PersonasService, 
      ) {
>>>>>>> cf962689184895ac8982e84330fad5ac84e33c6e
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
