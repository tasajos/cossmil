import { Component, OnInit } from '@angular/core';
import { PacientinService } from '../../services/pacientin.service';
import { PacInt } from '../../Interfaz/pac-int';

@Component({
  selector: 'app-internacion',
  templateUrl: './internacion.component.html',
  styleUrls: ['./internacion.component.css']
})
export class InternacionComponent implements OnInit {

  constructor(private pacienteService: PacientinService) { }
  
  pacientesActivos: PacInt[] = [];
  
  ngOnInit(): void {
    this.pacienteService.PacientesActivos().subscribe(data => {
      this.pacientesActivos = data;
    });
  }}
