import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-plandecuentas',
  templateUrl: './plandecuentas.component.html',
  styleUrls: ['./plandecuentas.component.css']
})
export class PlandecuentasComponent   implements AfterViewInit {


  ngAfterViewInit() {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#list-example'
    });
  }
  

  }