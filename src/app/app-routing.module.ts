import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPokemonsComponent } from './lista-pokemons/lista-pokemons.component';


const routes: Routes = [
  {path: 'lista-pokemons', component: ListaPokemonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
