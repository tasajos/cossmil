import { Component, OnInit } from '@angular/core';
import { RecetaservicesService } from '../../../services/recetaservices.service';
import { RecInt } from '../../../Interfaz/rec-int';

@Component({
  selector: 'app-listreceta',
  templateUrl: './listreceta.component.html',
  styleUrls: ['./listreceta.component.css']
})
export class ListrecetaComponent  implements OnInit {
  recetasPorPieza: RecInt[][]= [];

  constructor(private recetaService: RecetaservicesService) { }

  ngOnInit(): void {
    this.recetaService.getReceta().subscribe((recetas: RecInt[]) => {
      this.recetasPorPieza = recetas.reduce((acc: RecInt[][], receta: RecInt) => {
        const piezaIndex = acc.findIndex((recetasPieza: RecInt[]) => recetasPieza[0].pieza === receta.pieza);
        if (piezaIndex === -1) {
          acc.push([receta]);
        } else {
          acc[piezaIndex].push(receta);
        }
        return acc;
      }, []);
    });
  }
}