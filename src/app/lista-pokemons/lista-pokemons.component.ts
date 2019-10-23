import { Component, OnInit } from '@angular/core';
import { SalunosService } from '../ash.service'

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.css']
})
export class ListaPokemonsComponent implements OnInit {
  pokemons = [];

  constructor(
    private servicepokemons:SalunosService
  ) { }

    getPokemons(){
      this.servicepokemons.getPokemons().subscribe(dados => this.pokemons = dados.results;
    }

  ngOnInit() {
  }

}