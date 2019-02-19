import { Persona } from './persona.model';
import { LoggingService } from './LoggingServise.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService {

    constructor(private loggingService: LoggingService) {}

    saludar = new EventEmitter<number>();
    personas: Persona[] = [new Persona('aaaa', 'bbbb'), new Persona('cccc', 'dddd')];


    agregarPersona(persona: Persona) {
        this.loggingService.mostrarMensaje('Imprimiendo desde persona service');
        this.personas.push(persona);
    }

    buscarPersona(index: number) {
        return  this.personas[index];
    }

    modificarPersona(index: number, persona: Persona) {
        const p = this.personas[index];
        p.nombre = persona.nombre;
        p.apellido = persona.apellido;
    }

    eliminarPersona(index: number) {
       this.personas.splice(index, 1);
    }
}
