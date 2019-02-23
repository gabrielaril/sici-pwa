import { Component, OnInit } from '@angular/core';
 
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  selectedHero: Hero;
<<<<<<< HEAD

  /*hero: Hero = {
    id: 1,
    name: 'Windstron'
  };*/

  constructor() { }

=======
 
  heroes: Hero[];
 
  constructor(private heroService: HeroService) { }
 
>>>>>>> cf962689184895ac8982e84330fad5ac84e33c6e
  ngOnInit() {
    this.getHeroes();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}