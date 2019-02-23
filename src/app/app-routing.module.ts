import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
<<<<<<< HEAD
import { ErrorComponent } from './error/error.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', component: PersonasComponent},
  { path: 'personas', component: PersonasComponent, children: [
    { path: 'agregar', component: FormularioComponent},
    { path: ':id', component: FormularioComponent}
  ]},
  { path: 'hero', component: HeroesComponent},
  { path: '**', component: ErrorComponent}
  ];
=======
import { HeroesComponent }      from './heroes/heroes.component';

const routes: Routes = [
  { path: '', component: PersonasComponent},
  { path: 'personas', component: PersonasComponent},
  { path: 'personas/agregar', component: FormularioComponent},
  { path: 'personas/editar/:id', component: PersonasComponent},
  { path: 'heroes', component: HeroesComponent }];
>>>>>>> cf962689184895ac8982e84330fad5ac84e33c6e

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
