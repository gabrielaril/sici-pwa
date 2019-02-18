import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../PersonasService.service';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
    activo = false;
    creado = false;
    creadoMsj = 'No se han creado personas';
    tituloPersona = 'gaby';
    personas: Persona[] = [];

    constructor(private ps: PersonasService) {}
    ngOnInit(): void {
        this.personas = this.ps.personas;
    }

    onCreatePersona() {
        this.creado = true;
        this.creadoMsj = 'Se creo persona';
    }

    oncChangeTituloPersona(e: Event) {
        this.tituloPersona = (e.target as HTMLInputElement).value;
    }

    onAgregarPersona(p: Persona) {
      this.ps.agregarPersona(p);
    }
}

