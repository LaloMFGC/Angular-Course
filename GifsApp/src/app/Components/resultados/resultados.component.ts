import { Component, OnChanges, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { PokemonData } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  data = {} as PokemonData;

  constructor(public gifService: GifsService) { }

  ngOnInit(): void {
    
  }

  image = '../../../assets/Pokeball.png';


  get pokemoninfo(){

      this.data = this.gifService.pokemon
      return this.data;

  }

  




  // get pokemoninfo(){
    
  //   console.log(this.gifService.resultados)
  //   return this.gifService.resultados;

  // }



  // get _pokemon(){

    // console.log("Entro a get pokemon");

    // if(this.gifService.pokemon.sprites.front_default){
      
    //   // this.image = this.gifService.images['sprites' as any]['front_default' as any];
    //   this.image = this.gifService.pokemon.sprites.front_default;
      
    //   console.log(this.image)

    //   return this.image;
    // }else{
    //   console.log("Entro al else: ",this.image)
    //   return this.image;
    // }
    

  // }


  


}
