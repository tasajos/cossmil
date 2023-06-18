import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ingresoInter,opcionesInter } from '../Interfaz/transacciones';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {


  //endpoint

  private Myappurl: string = environment.endpoint;
  //relaciones
  private Myapiurl: string = 'api/Transacciones/ingresosT';
  private Myapiurlpi: string = 'api/Transacciones/ingresospT';
  private Myapiurlun: string = 'api/Transacciones/ultimoNumero';
  private Myapiurlupn: string = 'api/Transacciones/ultimoNumero';
  

  //opcionesT
  private Myapiurlopt: string = 'api/Transacciones/opcionesT';
  private Myapiurloptp: string = 'api/Transacciones/opcionespT';

  



  
  constructor(private http: HttpClient) { } // Inject HttpClient here

//////////////////////
///////Ingresos///
////////////////////

  getingresocuentas(): Observable<ingresoInter[]> {
    return this.http.get<ingresoInter[]>(this.Myappurl + this.Myapiurl);  //ingresos
  }
  
  
  postingresocuentas  (cuentas: ingresoInter): Observable<ingresoInter>{

    return this.http.post<ingresoInter>(`${this.Myappurl}${this.Myapiurlpi}`,cuentas);
    
  }


  getUltimoNumero(): Observable<number> {
    return this.http.get<number>(this.Myappurl + this.Myapiurlun);
  }


//////////////////////
///////Opciones//////
////////////////////


getopcionescuentas(): Observable<opcionesInter[]> {
  return this.http.get<opcionesInter[]>(this.Myappurl + this.Myapiurlopt);  //opcionesT
}

postopcionescuentas(cuentas: opcionesInter): Observable<opcionesInter> {
  return this.http.post<opcionesInter>(`${this.Myappurl}${this.Myapiurloptp}`, cuentas);
}

}