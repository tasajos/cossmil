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
  public fechaActual: Date = new Date();
  
 

  constructor(private cirugiaserv: CirugiaservService) { }

  ngOnInit(): void {
    this.getCirugias();
    setInterval(() => {
      window.location.reload();
    }, 10000);
  }


  getCirugias(){
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate().toString();
  const mesActual = (fechaActual.getMonth() + 1).toString();
  const anioActual = fechaActual.getFullYear().toString();
    this.cirugiaserv.getPersonal().subscribe(data => {
      console.log(data)
      this.cirugias = data.filter(cirugia => cirugia.fechap === diaActual && cirugia.fecham === mesActual && cirugia.fechaa === anioActual);
    });
  }

}
