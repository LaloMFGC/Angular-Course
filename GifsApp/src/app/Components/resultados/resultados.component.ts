import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
  }

  image = '../../../assets/Pokeball.png';

  // get images(){

  //   if(!this.gifService.images.values){
  //     this.image = this.gifService.images['sprites' as any]['front_default' as any];
  //     return this.image;
  //   }else{
  //     return this.image;
  //   }

  // }

  // get information(){

  //   if(!this.gifService.images.values){
  //     this.image = this.gifService.images['sprites' as any]['front_default' as any];
  //     return this.image;
  //   }else{
  //     return this.image;
  //   }

  // }

  


}
