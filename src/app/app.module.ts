import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaPokemonsComponent } from './lista-pokemons/lista-pokemons.component';
import { DetalhesPokemonComponent } from './detalhes-pokemon/detalhes-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaPokemonsComponent,
    DetalhesPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
