import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registrarcuentacontabilidad } from '../Interfaz/contabilidad';
import { cuentacontabilidadInter } from '../Interfaz/contabilidad';
import { ActivoInter,ActivoIntern3,ActivoIntern4 } from '../Interfaz/contabilidad';
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
  private Myapiurln3: string = 'api/ManejoCuentas/3ernivel';
  private Myapiurlp3: string = 'api/ManejoCuentas/activoclasen3';
  private Myapiurlan3: string = 'api/ManejoCuentas/activon3nivel';
  private Myapiurlan4: string = 'api/ManejoCuentas/activoclasen4';
  
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

getactivon3(): Observable<ActivoInter[]> {
     
  return this.http.get<ActivoInter[]>(this.Myappurl+this.Myapiurln3);
}


postactivon3  (activocuentas: ActivoIntern3): Observable<ActivoIntern3>{

  return this.http.post<ActivoIntern3>(`${this.Myappurl}${this.Myapiurlp3}`,activocuentas);
  
}

getactivon3a(): Observable<ActivoIntern3[]> {
     
  return this.http.get<ActivoIntern3[]>(this.Myappurl+this.Myapiurlan3);
}

postactivon4  (activocuentas: ActivoIntern4): Observable<ActivoIntern4>{

  return this.http.post<ActivoIntern4>(`${this.Myappurl}${this.Myapiurlan4}`,activocuentas);
  
}

}
