import { Component, OnInit } from '@angular/core';
import { AshService } from '../ash.service';
import { DataApi} from '../data-api';

@Component({
  selector: 'app-lista-tipos-pokemon',
  templateUrl: './lista-tipos-pokemon.component.html',
  styleUrls: ['./lista-tipos-pokemon.component.css']
})
export class ListaTiposPokemonComponent implements OnInit {
  types = [];
  data:DataApi;

  constructor(private servicepokemons:AshService) { }

  ngOnInit() {
    this.getTypes();
  }

  getTypes(){
    this.servicepokemons.getAllTypes().subscribe(dados => {
      this.data = dados;
      this.types = this.data.results;   
    })
  }
}
