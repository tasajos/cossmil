import { Component, Input, HostListener } from '@angular/core';
import { Prueba3Component } from '../prueba3/prueba3.component';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component {

  sideBar: any;
  @Input() sidebar!: Prueba3Component;

  @HostListener('click')
  click() {
    this.sidebar.toggle();
  }

}
