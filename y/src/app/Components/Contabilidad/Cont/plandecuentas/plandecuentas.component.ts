import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ContabiliadService } from '../../../../services/contabiliad.service'; 
import { cuentacontabilidadInter } from '../../../../Interfaz/contabilidad'
declare var bootstrap: any;

@Component({
  selector: 'app-plandecuentas',
  templateUrl: './plandecuentas.component.html',
  styleUrls: ['./plandecuentas.component.css']
})
export class PlandecuentasComponent  implements OnInit {


  cuentas: cuentacontabilidadInter[] = [];

  constructor(private contabilidadService: ContabiliadService) {}

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