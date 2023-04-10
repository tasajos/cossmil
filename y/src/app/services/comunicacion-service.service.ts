import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionServiceService {
  notificacion = new EventEmitter<string>();

  enviarNotificacion(mensaje: string) {
    this.notificacion.emit(mensaje);
  }
}
