import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;
  imgtext = '';


  constructor(private gifservice: GifsService) { }

  ngOnInit(): void {
  }


  busquedakeyup(){
    this.gifservice.searchgifs(this.txtbuscar.nativeElement.value);
    this.txtbuscar.nativeElement.value = '';
  }


  busquedangmodel(){
    this.gifservice.searchgifs(this.imgtext);
    this.imgtext = '';
  }


  // 
  // busquedangmodel(){
  //   this.gifservice.searchgifs(this.txtbuscar.nativeElement.value);
  //   this.txtbuscar.nativeElement.value = '';
  // }

}
