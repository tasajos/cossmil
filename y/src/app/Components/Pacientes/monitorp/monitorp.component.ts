import { Component, OnInit } from '@angular/core';
import { PacientinService } from '../../../services/pacientin.service';
import { PacInt } from '../../../Interfaz/pac-int';
import { PacIntResponse } from '../../../Interfaz/PacIntResponse';

@Component({
  selector: 'app-monitorp',
  templateUrl: './monitorp.component.html',
  styleUrls: ['./monitorp.component.css']
})
export class MonitorpComponent implements OnInit {

  constructor(private pacienteService: PacientinService) { }
  
  pacientesActivos: PacInt[] = [];
 
  ngOnInit(): void {
    this.pacienteService.PacientesActivos().subscribe(data => {
      this.pacientesActivos = data;
    });
  }

}

