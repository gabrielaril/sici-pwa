import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../PersonasService.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  constructor(private personasService: PersonasService) {}

  @Input() persona: Persona;
  @Input() index: number;

  emitirSaludo() {
    this.personasService.saludar.emit(this.index);
  }

}
