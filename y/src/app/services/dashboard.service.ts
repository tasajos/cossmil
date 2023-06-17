import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlandeCuentaInterdboard } from '../Interfaz/dboardgral';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private Myappurl: string = environment.endpoint;
  //dashboard
  private Myapiurl: string = 'api/Dashboard_Cuentas/dashboardactivo';
  private Myapiurldp: string = 'api/Dashboard_Cuentas/dashboardpasivo';
  private Myapiurldpatr: string = 'api/Dashboard_Cuentas/dboardpatrimonio';
  private Myapiurldcdist: string = 'api/Dashboard_Cuentas/dboardcdistribucion';
  private Myapiurldcprod: string = 'api/Dashboard_Cuentas/dboardcproducto';
  private Myapiurldcopet: string = 'api/Dashboard_Cuentas/dboardcoperativo';

  
//Total Registros
  private Myapiurlac: string = 'api/Dashboard_Cuentas/totalregistrosDB';
  private Myapiurlacp: string = 'api/Dashboard_Cuentas/totalregistrosDBPasivo';
  private Myapiurlaccpat: string = 'api/Dashboard_Cuentas/totalregistrosDBPatrimonio';
  private Myapiurlaccd: string = 'api/Dashboard_Cuentas/totalregistrosDBcdistribucion';
  private Myapiurlaccp: string = 'api/Dashboard_Cuentas/totalregistrosDBcproducto';
  private Myapiurlacco: string = 'api/Dashboard_Cuentas/totalregistrosDBcoperacion';
  
 
  constructor(private http: HttpClient) { } // Inject HttpClient here

//////////////////////
///////plancuentas///
////////////////////

  getplancuentas(): Observable<PlandeCuentaInterdboard[]> {
    return this.http.get<PlandeCuentaInterdboard[]>(this.Myappurl + this.Myapiurl);  //activo
  }
  
  getplandashboardpasivo(): Observable<PlandeCuentaInterdboard[]> {
    return this.http.get<PlandeCuentaInterdboard[]>(this.Myappurl + this.Myapiurldp);  //pasivo
  }

  getplandashboardpatrimonio(): Observable<PlandeCuentaInterdboard[]> {
    return this.http.get<PlandeCuentaInterdboard[]>(this.Myappurl + this.Myapiurlaccpat); //patrimonio
  }

  getplandashboardcdistr(): Observable<PlandeCuentaInterdboard[]> {
    return this.http.get<PlandeCuentaInterdboard[]>(this.Myappurl + this.Myapiurlaccd); //cuenta distribucion   
  }

  getplandashboardcprod(): Observable<PlandeCuentaInterdboard[]> {
    return this.http.get<PlandeCuentaInterdboard[]>(this.Myappurl + this.Myapiurlaccp); //cuenta producto
  }

  getplandashboardcoperativo(): Observable<PlandeCuentaInterdboard[]> {
    return this.http.get<PlandeCuentaInterdboard[]>(this.Myappurl + this.Myapiurlacco); //costo operativo
  }



//////////////////////////
//// TOTAL REGISTROS ////
////////////////////////


  getplancuentasactivo(): Observable<PlandeCuentaInterdboard[]> {
    return this.http.get<PlandeCuentaInterdboard[]>(this.Myappurl + this.Myapiurlac);
  

}

getplancuentasactivoT(): Observable<number> {
  return this.http.get<number>(this.Myappurl + this.Myapiurlac);
}

getplancuentaspasivoT(): Observable<number> {
  return this.http.get<number>(this.Myappurl + this.Myapiurlacp);
}

getplancuentasdistribucionT(): Observable<number> {
  return this.http.get<number>(this.Myappurl + this.Myapiurlaccd);
}

getplancuentaspatrimonioT(): Observable<number> {
  return this.http.get<number>(this.Myappurl + this.Myapiurlaccpat);
}

getplancuentasproductoT(): Observable<number> {
  return this.http.get<number>(this.Myappurl + this.Myapiurlaccp);
}
getplancuentascoperacionT(): Observable<number> {
  return this.http.get<number>(this.Myappurl + this.Myapiurlacco);
}

}