import { Component, OnInit } from '@angular/core';
import { CirugiaservService } from 'src/app/services/cirugiaserv.service';
import { cirugiaInter } from 'src/app/Interfaz/cirugia';

@Component({
  selector: 'app-vercirugia',
  templateUrl: './vercirugia.component.html',
  styleUrls: ['./vercirugia.component.css']
})
export class VercirugiaComponent implements OnInit {
  public cirugias: cirugiaInter[]= [];

  constructor(private cirugiaserv: CirugiaservService) { }

  ngOnInit(): void {
    this.getCirugias();
  }

  getCirugias(){
    this.cirugiaserv.getPersonal().subscribe(data => {
      this.cirugias = data;
    });
  }

}
