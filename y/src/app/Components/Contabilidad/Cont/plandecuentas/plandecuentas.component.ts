import { Component, AfterViewInit, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';

import { ContabiliadService } from '../../../../services/contabiliad.service'; 
import { cuentacontabilidadInter } from '../../../../Interfaz/contabilidad'
declare var bootstrap: any;


export interface ExampleTab {
  label: string;
  content: string;
}



@Component({
  selector: 'app-plandecuentas',
  templateUrl: './plandecuentas.component.html',
  styleUrls: ['./plandecuentas.component.css'],
  
  
})
export class PlandecuentasComponent  implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;
  cuentas: cuentacontabilidadInter[] = [];

  constructor(private contabilidadService: ContabiliadService) {

    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);


    });

  }

  ngOnInit() {
    this.getCuentas();
  }

  getCuentas() {
    this.contabilidadService.gettiposcuentas().subscribe(
      (data) => {
        this.cuentas = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}