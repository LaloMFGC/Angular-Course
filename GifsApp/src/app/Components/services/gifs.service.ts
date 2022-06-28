import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonData } from '../interfaces/pokemon.interface';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apikey = 'https://pokeapi.co/api/v2'
  private _historial: string[] = [];
  public pokemon = {} as PokemonData;

  

  constructor(private http: HttpClient) { }

  get historial(){
    return [...this._historial];
  }


  searchtext( data: string){

    data = data.trim().toLowerCase();

    if(!this._historial.includes(data)){
      this._historial.unshift(data);
    }

    this.http.get<PokemonData>(`${this.apikey}/pokemon/${data}`).subscribe( (resp) =>{
    
      
      this.pokemon = resp;

    })


  }






  // searchtext( data: string){

  //   data = data.trim().toLowerCase();

  //   if(!this._historial.includes(data)){
  //     this._historial.unshift(data);
  //   }

  //   this.http.get(this.apikey+data).subscribe( (resp:any) =>{
    
  //     // this.pokemoninfo[0] = resp;
  //     this.resultados = resp;

  //   })


  // }

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
