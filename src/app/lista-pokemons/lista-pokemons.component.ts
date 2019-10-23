import { Component, OnInit } from '@angular/core';
import { AshService } from '../ash.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.css']
})
export class ListaPokemonsComponent implements OnInit {
  pokemons = []
  previous:string;
  next:string;

  constructor(private servicepokemons:AshService) {  
  }

  getPokemons(){
    this.servicepokemons.getPokemons().subscribe(dados => {this.pokemons = dados.results;
      this.next = dados.next;
      this.previous = dados.previous;
    
    });
  }

  ngOnInit() {
    this.getPokemons();
  }

}