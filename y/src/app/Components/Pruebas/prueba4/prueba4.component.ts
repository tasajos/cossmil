import { Component, OnInit } from '@angular/core';
import { RecetaservicesService } from '../../../services/recetaservices.service';
import { RecInt } from '../../../Interfaz/rec-int';


@Component({
  selector: 'app-prueba4',
  templateUrl: './prueba4.component.html',
  styleUrls: ['./prueba4.component.css']
})
export class Prueba4Component implements OnInit {

  recetas: RecInt[] = [];

  constructor(private recetaService: RecetaservicesService) { }

  ngOnInit(): void {
    this.recetaService.getRecetaAlert2().subscribe(recetas => {
      this.recetas = recetas;
      console.log(recetas);
    });

    this.recetaService.getRecetaAlert().subscribe(recetas => {
      this.recetas = recetas;
      console.log(recetas);
    });
  }

}