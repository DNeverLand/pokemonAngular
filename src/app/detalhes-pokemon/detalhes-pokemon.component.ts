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
  constructor(private servicePokemons:AshService, private route:ActivatedRoute) { }

  ngOnInit() {
    let name:string;
    this.route.paramMap.subscribe(pokemon => name = pokemon.get('pokemon'));
    this.servicePokemons.getPokemon(name).subscribe(pokemon => this.pokemon = pokemon);
  }

}
