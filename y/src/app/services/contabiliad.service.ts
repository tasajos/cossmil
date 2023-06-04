import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registrarcuentacontabilidad } from '../Interfaz/contabilidad';
import { cuentacontabilidadInter } from '../Interfaz/contabilidad';
import { ActivoInter } from '../Interfaz/contabilidad';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContabiliadService {

  //ENTORNO PARA LLAMAR
  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/TiposCuentas/';
  private Myapiurlac: string = 'api/ManejoCuentas/';
  



//Constructor para llamar

  constructor(private http: HttpClient) { }

  //funcion llamar tabla tiposcuentas
  gettiposcuentas(): Observable<cuentacontabilidadInter[]> {
     
    return this.http.get<cuentacontabilidadInter[]>(this.Myappurl+this.Myapiurl);
  }


  //
//ingresar tabla activoscuenta

postactivo  (activocuenta: ActivoInter): Observable<ActivoInter>{

  return this.http.post<ActivoInter>(`${this.Myappurl}${this.Myapiurlac}`,activocuenta);
  
}

getactivo(): Observable<ActivoInter[]> {
     
  return this.http.get<ActivoInter[]>(this.Myappurl+this.Myapiurlac);
}


}
