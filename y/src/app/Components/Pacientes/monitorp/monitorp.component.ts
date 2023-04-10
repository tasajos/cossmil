import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { PacientinService } from '../../../services/pacientin.service';
import { PacInt } from '../../../Interfaz/pac-int';
import { PacIntResponse } from '../../../Interfaz/PacIntResponse';
import { ComunicacionServiceService } from '../../../services/comunicacion-service.service';


@Component({
  selector: 'app-monitorp',
  templateUrl: './monitorp.component.html',
  styleUrls: ['./monitorp.component.css']
})
export class MonitorpComponent implements OnInit {
  
  mensajeNotificacion: string = '';
  constructor(private pacienteService: PacientinService,private comunicacionService: ComunicacionServiceService,private cdRef: ChangeDetectorRef) { }
  
  pacientesActivos: PacInt[] = [];
 
  ngOnInit(): void {
    this.pacienteService.PacientesActivos().subscribe(data => {
      this.pacientesActivos = data;
    });
    this.comunicacionService.notificacion.subscribe(mensaje => {
      console.log('Recibido mensaje de notificación:', mensaje);
      this.manejarNotificacion(mensaje);
    });
  }
  manejarNotificacion(mensaje: string) {
    console.log('Manejando notificación:', mensaje);
    this.mensajeNotificacion = mensaje;
    this.cdRef.detectChanges();
  }
}

