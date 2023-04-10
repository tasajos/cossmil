import { Component, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PacientinService } from '../../services/pacientin.service';
import { ComunicacionServiceService } from '../../services/comunicacion-service.service';
import { MonitorpComponent } from '../../Components/Pacientes/monitorp/monitorp.component';
import { CabeceraComponent } from '../../Components/cabecera/cabecera.component';



@Component({
  selector: 'app-r2t',
  templateUrl: './r2t.component.html',
  styleUrls: ['./r2t.component.css']
})
export class R2tComponent{
  //constructor(private comunicacionService: ComunicacionServiceService) {}

 // enviarNotificacion() {
    //this.comunicacionService.enviarNotificacion('Mensaje de notificación');
  //}
}