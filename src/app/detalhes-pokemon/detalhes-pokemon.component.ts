import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { AshService } from '../ash.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-pokemon',
  templateUrl: './detalhes-pokemon.component.html',
  styleUrls: ['./detalhes-pokemon.component.css']
})
export class DetalhesPokemonComponent implements OnInit {
    pokemon:Pokemon;
    abilities = [];
    types = [];
  constructor(private servicePokemons:AshService, private route:ActivatedRoute) { }

  ngOnInit() {
    let id:number;
    this.route.paramMap.subscribe(params => id = +params.get('pokemonId'));
    this.servicePokemons.getPokemon(id).subscribe(pokemon => {this.pokemon = pokemon;
      this.abilities = pokemon.abilities;
      this.types = pokemon.types;   
    });
  }
}