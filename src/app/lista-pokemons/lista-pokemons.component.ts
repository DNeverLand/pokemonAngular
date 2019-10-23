import { Component, OnInit } from '@angular/core';
import { AshService } from '../ash.service';
import { DataApi} from '../data-api';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.css']
})
export class ListaPokemonsComponent implements OnInit {
  pokemons = [];
  data:DataApi;
  next:string;
  previous:string;

  constructor(private servicepokemons:AshService) {  
  }

  getPokemons(){
    this.servicepokemons.getPokemons().subscribe(dados => {
      
      this.data = dados;
      console.log(this.data);
      this.pokemons = this.data.results;
      this.next = this.data.next;
      this.previous = this.data.previous;
    });


  }
  getPokemonsPreviousNext(flag:boolean){
        if(flag == true){
          this.servicepokemons.getPokemons(this.next).subscribe(dados => { 
          this.data = dados;
          this.next = this.data.next;
          this.previous = this.data.previous;
        });
        console.log(this.data);
      }else{
        this.servicepokemons.getPokemons(this.previous).subscribe(dados => { this.data = dados;
        this.next = this.data.next;
        this.previous = this.data.previous;
        });

      }
  }
  ngOnInit() {
    this.getPokemons();
  }

}