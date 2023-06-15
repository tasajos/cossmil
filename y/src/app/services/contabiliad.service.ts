import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registrarcuentacontabilidad } from '../Interfaz/contabilidad';
import { cuentacontabilidadInter } from '../Interfaz/contabilidad';
import { ActivoInter,ActivoIntern3,ActivoIntern4,ActivoIntern5,ActivoIntern6,
         PasivoIntern2,PasivoIntern3,PasivoIntern4,PasivoIntern5,PasivoIntern6,
         PatrimonioIntern2, PatrimonioIntern3,PatrimonioIntern4,PatrimonioIntern5,PatrimonioIntern6} from '../Interfaz/contabilidad';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContabiliadService {

  //ENTORNO PARA LLAMAR
  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/TiposCuentas/';

  //  entorno para llamar activos
  private Myapiurlac: string = 'api/ManejoCuentas/';
  private Myapiurln3: string = 'api/ManejoCuentas/3ernivel';
  private Myapiurlp3: string = 'api/ManejoCuentas/activoclasen3';
  private Myapiurlan3: string = 'api/ManejoCuentas/activon3nivel';
  private Myapiurlan4: string = 'api/ManejoCuentas/activoclasen4';
  private Myapiurlac4: string = 'api/ManejoCuentas/activon4nivel';
  private Myapiurlan5: string = 'api/ManejoCuentas/activoclasen5';
  private Myapiurlac5: string = 'api/ManejoCuentas/activon5nivel';
  private Myapiurlan6: string = 'api/ManejoCuentas/activoclasen6';

  //entorno para llamar pasivos

  private Myapiurlg2: string = 'api/ManejoCuentas/pasivon2nivel'; //get nivel2
  private Myapiurlp2: string = 'api/ManejoCuentas/pasivon2nivelp'; //post nivel2
  private Myapiurlg3: string = 'api/ManejoCuentas/pasivon3nivel'; //get nivel3
  private Myapiurlpp3: string = 'api/ManejoCuentas/pasivon3nivelp'; //get nivel3
  private Myapiurlg4: string = 'api/ManejoCuentas/pasivon4nivel'; //get nivel4
  private Myapiurlpp4: string = 'api/ManejoCuentas/pasivon4nivelp'; //get nivel4
  private Myapiurlg5: string = 'api/ManejoCuentas/pasivon5nivel'; //get nivel5
  private Myapiurlpp5: string = 'api/ManejoCuentas/pasivon5nivelp'; //get nivel5
  private Myapiurlg6: string = 'api/ManejoCuentas/pasivon6nivel'; //get nivel6
  private Myapiurlpp6: string = 'api/ManejoCuentas/pasivon6nivelp'; //get nivel6


   //entorno para llamar Patrimonio

   private Myapiurlpatg2: string = 'api/ManejoCuentas/patrimonio2nivel'; //get nivel 2
   private Myapiurlpatp2: string = 'api/ManejoCuentas/patrimonio2nivelp'; //post nivel 2
   private Myapiurlpatg3: string = 'api/ManejoCuentas/patrimonio3nivel'; //get nivel 3
   private Myapiurlpatp3: string = 'api/ManejoCuentas/patrimonio3nivelp'; //post nivel 3

   private Myapiurlpatg4: string = 'api/ManejoCuentas/patrimonio4nivel'; //get nivel 4
   private Myapiurlpatp4: string = 'api/ManejoCuentas/patrimonio4nivelp'; //post nivel 4


   private Myapiurlpatg5: string = 'api/ManejoCuentas/patrimonio5nivel'; //get nivel 5
   private Myapiurlpatp5: string = 'api/ManejoCuentas/patrimonio5nivelp'; //post nivel 5

 




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

getactivon4a(): Observable<ActivoIntern4[]> {
     
  return this.http.get<ActivoIntern4[]>(this.Myappurl+this.Myapiurlac4);
}

postactivon5  (activocuentas: ActivoIntern5): Observable<ActivoIntern5>{

  return this.http.post<ActivoIntern5>(`${this.Myappurl}${this.Myapiurlan5}`,activocuentas);
  
}

getactivon5a(): Observable<ActivoIntern5[]> {
     
  return this.http.get<ActivoIntern5[]>(this.Myappurl+this.Myapiurlac5);
}

postactivon6  (activocuentas: ActivoIntern6): Observable<ActivoIntern6>{

  return this.http.post<ActivoIntern6>(`${this.Myappurl}${this.Myapiurlan6}`,activocuentas);
  
}


//PASIVOS

getpasivon2(): Observable<PasivoIntern2[]> {
     
  return this.http.get<PasivoIntern2[]>(this.Myappurl+this.Myapiurlg2);
}


postpasivon2  (pasivocuentas: PasivoIntern2): Observable<PasivoIntern2>{

  return this.http.post<PasivoIntern2>(`${this.Myappurl}${this.Myapiurlp2}`,pasivocuentas);
  
}


getpasivon3(): Observable<PasivoIntern3[]> {
     
  return this.http.get<PasivoIntern3[]>(this.Myappurl+this.Myapiurlg3);
}


postpasivon3  (activocuentas: PasivoIntern3): Observable<PasivoIntern3>{

  return this.http.post<PasivoIntern3>(`${this.Myappurl}${this.Myapiurlpp3}`,activocuentas);
  
}


getpasivon4(): Observable<PasivoIntern4[]> {
     
  return this.http.get<PasivoIntern4[]>(this.Myappurl+this.Myapiurlg4);
}


postpasivon4  (activocuentas: PasivoIntern4): Observable<PasivoIntern4>{

  return this.http.post<PasivoIntern4>(`${this.Myappurl}${this.Myapiurlpp4}`,activocuentas);
  
}


getpasivon5(): Observable<PasivoIntern5[]> {
     
  return this.http.get<PasivoIntern5[]>(this.Myappurl+this.Myapiurlg5);
}

postpasivon5  (activocuentas: PasivoIntern5): Observable<PasivoIntern5>{

  return this.http.post<PasivoIntern5>(`${this.Myappurl}${this.Myapiurlpp5}`,activocuentas);
  
}


getpasivon6(): Observable<PasivoIntern6[]> {
     
  return this.http.get<PasivoIntern6[]>(this.Myappurl+this.Myapiurlg6);
}

postpasivon6  (activocuentas: PasivoIntern6): Observable<PasivoIntern6>{

  return this.http.post<PasivoIntern6>(`${this.Myappurl}${this.Myapiurlpp6}`,activocuentas);
  
}

//PATRIMONIO

getpatrimonion2(): Observable<PatrimonioIntern2[]> {
     
  return this.http.get<PatrimonioIntern2[]>(this.Myappurl+this.Myapiurlpatg2);
}

postpatrimonion2  (patrimoniocuentas: PatrimonioIntern2): Observable<PatrimonioIntern2>{

  return this.http.post<PatrimonioIntern2>(`${this.Myappurl}${this.Myapiurlpatp2}`,patrimoniocuentas);
  
}


getpatrimonion3(): Observable<PatrimonioIntern3[]> {
     
  return this.http.get<PatrimonioIntern3[]>(this.Myappurl+this.Myapiurlpatg3);
}

postpatrimonion3  (patrimoniocuentas: PatrimonioIntern3): Observable<PatrimonioIntern3>{

  return this.http.post<PatrimonioIntern3>(`${this.Myappurl}${this.Myapiurlpatp3}`,patrimoniocuentas);
  
}


getpatrimonion4(): Observable<PatrimonioIntern4[]> {
     
  return this.http.get<PatrimonioIntern4[]>(this.Myappurl+this.Myapiurlpatg4);
}

postpatrimonion4  (patrimoniocuentas: PatrimonioIntern4): Observable<PatrimonioIntern4>{

  return this.http.post<PatrimonioIntern4>(`${this.Myappurl}${this.Myapiurlpatp4}`,patrimoniocuentas);
  
}



getpatrimonion5(): Observable<PatrimonioIntern5[]> {
     
  return this.http.get<PatrimonioIntern5[]>(this.Myappurl+this.Myapiurlpatg5);
}

postpatrimonion5  (patrimoniocuentas: PatrimonioIntern5): Observable<PatrimonioIntern5>{

  return this.http.post<PatrimonioIntern5>(`${this.Myappurl}${this.Myapiurlpatp5}`,patrimoniocuentas);
  
}


}
