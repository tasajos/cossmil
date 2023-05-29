import { Component, AfterViewInit, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';

export interface ExampleTab {
  label: string;
  content: string;
}


@Component({
  selector: 'app-guiacontabiliad',
  templateUrl: './guiacontabiliad.component.html',
  styleUrls: ['./guiacontabiliad.component.css']
})



export class GuiacontabiliadComponent {

  asyncTabs: Observable<ExampleTab[]>;



  constructor() {

    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Plan de Cuentas', content: 'Content 1'},
          {label: 'Balance', content: 'Prueba'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);


    });

}

}
