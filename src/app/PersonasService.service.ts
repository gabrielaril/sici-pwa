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
}
