import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaPokemonsComponent } from './lista-pokemons/lista-pokemons.component';
import { DetalhesPokemonComponent } from './detalhes-pokemon/detalhes-pokemon.component';
import { AshService } from './ash.service';
import { FightComponent } from './fight/fight.component';

const routes: Routes = [
    { path: 'pokemons/:pokemonId', component: DetalhesPokemonComponent},
    { path: 'pokemons', component: ListaPokemonsComponent},
    { path: 'fight', component: FightComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaPokemonsComponent,
    DetalhesPokemonComponent,
    FightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), 
    HttpClientModule 
  ],
  providers: [AshService],
  bootstrap: [AppComponent]
})
export class AppModule { }
