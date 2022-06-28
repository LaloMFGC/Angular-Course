import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

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
    this.gifservice.searchtext(this.txtbuscar.nativeElement.value);
    this.txtbuscar.nativeElement.value = '';
  }


  busquedangmodel(){
    this.gifservice.searchtext(this.imgtext);
    this.imgtext = '';
  }

}
