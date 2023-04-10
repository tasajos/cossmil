import { Component, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-r2t',
  templateUrl: './r2t.component.html',
  styleUrls: ['./r2t.component.css']
})
export class R2tComponent{
  notificacion = new EventEmitter<string>();

  enviarNotificacion() {
    this.notificacion.emit('Mensaje de notificación');
  }
}