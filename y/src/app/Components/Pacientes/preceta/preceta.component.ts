import { Component } from '@angular/core';

@Component({
  selector: 'app-preceta',
  templateUrl: './preceta.component.html',
  styleUrls: ['./preceta.component.css']
})
export class PrecetaComponent {
  selectedDate: Date;

  constructor() {
    this.selectedDate = new Date();
  }}