import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonData, Sprites } from './interfaces/pokemon.interface';





@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apikey = 'https://pokeapi.co/api/v2/pokemon/'
  private _historial: string[] = [];
  pokemon : PokemonData[] = [];

  constructor(private http: HttpClient) { }

  
  get historial(){
    return [...this._historial];
  }


 

  searchgifs( data: string){

    data = data.trim().toLowerCase();

    if(!this._historial.includes(data)){
      this._historial.unshift(data);
    }


    this.http.get<PokemonData>(this.apikey + data ).subscribe( (resp:PokemonData) => {

      this.pokemon = resp;

    })
    
  }

  // searchgifs( data: string){

  //   data = data.trim().toLowerCase();

  //   if(!this._historial.includes(data)){
  //     this._historial.unshift(data);
  //   }

  //   this.http.get(this.apikey + data ).subscribe( ({sprites}:any) => {

  //     this.images = sprites['front_default'];

  //   })
    

  // }

}
