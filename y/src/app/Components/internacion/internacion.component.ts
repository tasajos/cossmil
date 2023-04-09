import { Component, OnInit } from '@angular/core';
import { PacientinService } from '../../services/pacientin.service';
import { PacInt } from '../../Interfaz/pac-int';
import { PacIntResponse } from '../../Interfaz/PacIntResponse';

@Component({
  selector: 'app-internacion',
  templateUrl: './internacion.component.html',
  styleUrls: ['./internacion.component.css']
})
export class InternacionComponent implements OnInit {

  constructor(private pacienteService: PacientinService) { }
  
  pacientesActivos: PacInt[] = [];
  pacientesresume: { status: string, count: number }[] = [];
  
  ngOnInit(): void {
    this.pacienteService.PacientesActivos().subscribe(data => {
      this.pacientesActivos = data;
    });
    //this.pacienteService.resumenPacientes().subscribe(data=> {
      //this.pacientesresume =data;
      this.pacienteService.resumenPacientes().subscribe((data: PacIntResponse[]) => {
        const responseData: PacIntResponse[] = data.map(pac => ({ status: pac.status, count: pac.count }));
        this.pacientesresume = responseData;
      });
    
    }
  }
