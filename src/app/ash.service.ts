import { Injectable } from '@angular/core';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable()
export class AshService {

  private pokemonCatcher:string =  "https://pokeapi.co/api/v2/";

  constructor(private http:HttpClient) { 
  }

  getPokemons(page?:string): Observable<Pokemon[]>{
    //Retorna os 20 primeiros pokemons se vier a null senão tem que receber o endereço
    if(page == null){
      return this.http.get<Pokemon[]>(this.pokemonCatcher + "pokemon?offset=0&limit=20");
    }else{
      return this.http.get<Pokemon[]>(page);
    }
  }

  getPokemon(id:number): Observable<Pokemon>{
    //Retorna o pokemon enviado
    return this.http.get<Pokemon>(this.pokemonCatcher + "pokemon/" + id);

  }

  getAllTypes(): Observable<Type[]>{
    //Retorna os 20 tipo de de pokemons
    return this.http.get<Type[]>(this.pokemonCatcher + "type")
  }

  getSpecificType(type:string): Observable<Pokemon[]>{
    //Retorna todos os pokemons desse tipo
    return this.http.get<Pokemon[]>(type);

  }
}
