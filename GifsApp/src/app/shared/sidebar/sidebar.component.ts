import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../Components/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private gifservice: GifsService ) { }

  ngOnInit(): void {
  }


  get historial(){
    return this.gifservice.historial;
  }



}
