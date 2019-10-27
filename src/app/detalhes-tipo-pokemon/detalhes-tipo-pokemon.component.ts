import { Component, OnInit } from '@angular/core';
import { Type } from '../type';
import { AshService } from '../ash.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-tipo-pokemon',
  templateUrl: './detalhes-tipo-pokemon.component.html',
  styleUrls: ['./detalhes-tipo-pokemon.component.css']
})
export class DetalhesTipoPokemonComponent implements OnInit {
  tipo:Type;
  habilidades = [];
  pokemons = [];
  constructor(private servicePokemons:AshService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getType();
  }

  getType(){
    let id:number;
    this.route.paramMap.subscribe(params => id = +params.get('typeId'));
    this.servicePokemons.getSpecificType(id).subscribe(dados => {this.tipo = dados; 
    this.habilidades = this.tipo.moves;
    this.pokemons = this.tipo.pokemon;
    });
  }
}
