import { Injectable } from '@angular/core';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { Pokemon } from './pokemon';
import { Type } from './type';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable()
export class SalunosService {

  private pokemonCatcher:string =  "https://pokeapi.co/api/v2";

  constructor(private http:HttpClient) { 
  }

  getPokemons(page?:string): Observable<Pokemon[]>{
    //Retorna os 20 primeiros pokemons se vier a null senão tem que receber valor de 20 em 20 para os próximos pokemons
    if(page == null){
      return this.http.get<Pokemon[]>(this.pokemonCatcher+"/pokemon?offset=0&limit=20");
    }else{
      return this.http.get<Pokemon[]>(this.pokemonCatcher+"/pokemon?offset="+page+"&limit=20");
    }
  }
  getAllTypes(): Observable<Type[]>{
    //Retorna os 20 tipo de de pokemons
    return this.http.get<Type[]>(this.pokemonCatcher+"/type")
  }
}
