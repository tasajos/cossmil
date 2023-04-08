import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServService } from 'src/app/services/serv.service';
import {Inter} from 'src/app/Interfaz/inter';

@Component({
  selector: 'app-dboardfar',
  templateUrl: './dboardfar.component.html',
  styleUrls: ['./dboardfar.component.css']
})
export class DboardfarComponent implements OnInit {

  interList: Inter[] = [];

  constructor(private myService: ServService) { }

  ngOnInit() {
    this.myService.getlismed().subscribe(
      res => {
        this.interList = res;
      },
      err => console.log(err)
    );
  }
  
}