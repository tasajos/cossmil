import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registrarcuentacontabilidad } from '../Interfaz/contabilidad';
import { cuentacontabilidadInter } from '../Interfaz/contabilidad';
import { ActivoInter,ActivoIntern3,ActivoIntern4,ActivoIntern5,ActivoIntern6,
         PasivoIntern2,PasivoIntern3,PasivoIntern4,PasivoIntern5,PasivoIntern6,
         PatrimonioIntern2, PatrimonioIntern3,PatrimonioIntern4,PatrimonioIntern5,PatrimonioIntern6,
         CDistrIntern2,CDistrIntern3,CDistrIntern4,CDistrIntern5,CDistrIntern6,
         CProductosIntern2,CProductosIntern3,CProductosIntern4,CProductosIntern5,CProductosIntern6,
         COperacionIntern2,COperacionIntern3,COperacionIntern4,COperacionIntern5,COperacionIntern6} from '../Interfaz/contabilidad';
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

   private Myapiurlpatg6: string = 'api/ManejoCuentas/patrimonio6nivel'; //get nivel 6
   private Myapiurlpatp6: string = 'api/ManejoCuentas/patrimonio6nivelp'; //post nivel 6
 

//entorno para cuentas de distribucion
   private Myapiurlcdg2: string = 'api/ManejoCuentas/cuentad2nivel'; //get nivel 2
   private Myapiurlcdp2: string = 'api/ManejoCuentas/cuentad2nivelp'; //post nivel 2

   private Myapiurlcdg3: string = 'api/ManejoCuentas/cuentad3nivel'; //get nivel 3
   private Myapiurlcdp3: string = 'api/ManejoCuentas/cuentad3nivelp'; //post nivel 3

   private Myapiurlcdg4: string = 'api/ManejoCuentas/cuentad4nivel'; //get nivel 4
   private Myapiurlcdp4: string = 'api/ManejoCuentas/cuentad4nivelp'; //post nivel 4

   private Myapiurlcdg5: string = 'api/ManejoCuentas/cuentad5nivel'; //get nivel 5
   private Myapiurlcdp5: string = 'api/ManejoCuentas/cuentad5nivelp'; //post nivel 5

   private Myapiurlcdg6: string = 'api/ManejoCuentas/cuentad6nivel'; //get nivel 6
   private Myapiurlcdp6: string = 'api/ManejoCuentas/cuentad6nivelp'; //post nivel 6


//entorno para cuentas de productos

   private Myapiurlcpg2: string = 'api/ManejoCuentas/cuentap2nivel'; //get nivel 2
   private Myapiurlcpp2: string = 'api/ManejoCuentas/cuentap2nivelp'; //post nivel 2

   private Myapiurlcpg3: string = 'api/ManejoCuentas/cuentap3nivel'; //get nivel 3
   private Myapiurlcpp3: string = 'api/ManejoCuentas/cuentap3nivelp'; //post nivel 3


   private Myapiurlcpg4: string = 'api/ManejoCuentas/cuentap4nivel'; //get nivel 4
   private Myapiurlcpp4: string = 'api/ManejoCuentas/cuentap4nivelp'; //post nivel 4

   private Myapiurlcpg5: string = 'api/ManejoCuentas/cuentap5nivel'; //get nivel 5
   private Myapiurlcpp5: string = 'api/ManejoCuentas/cuentap5nivelp'; //post nivel 5

   private Myapiurlcpg6: string = 'api/ManejoCuentas/cuentap6nivel'; //get nivel 6
   private Myapiurlcpp6: string = 'api/ManejoCuentas/cuentap6nivelp'; //post nivel 6


   //entorno para costos de operacion

   private Myapiurlcog2: string = 'api/ManejoCuentas/cuentao2nivel'; //get nivel 2
   private Myapiurlcop2: string = 'api/ManejoCuentas/cuentao2nivelp'; //post nivel 2

   private Myapiurlcog3: string = 'api/ManejoCuentas/cuentao3nivel'; //get nivel 3
   private Myapiurlcop3: string = 'api/ManejoCuentas/cuentao3nivelp'; //post nivel 3


   private Myapiurlcog4: string = 'api/ManejoCuentas/cuentao4nivel'; //get nivel 4
   private Myapiurlcop4: string = 'api/ManejoCuentas/cuentao4nivelp'; //post nivel 4

   private Myapiurlcog5: string = 'api/ManejoCuentas/cuentao5nivel'; //get nivel 5
   private Myapiurlcop5: string = 'api/ManejoCuentas/cuentao5nivelp'; //post nivel 5

   private Myapiurlcog6: string = 'api/ManejoCuentas/cuentao6nivel'; //get nivel 6
   private Myapiurlcop6: string = 'api/ManejoCuentas/cuentao6nivelp'; //post nivel 6

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


getpatrimonion6(): Observable<PatrimonioIntern6[]> {
     
  return this.http.get<PatrimonioIntern6[]>(this.Myappurl+this.Myapiurlpatg6);
}

postpatrimonion6  (patrimoniocuentas: PatrimonioIntern6): Observable<PatrimonioIntern6>{

  return this.http.post<PatrimonioIntern6>(`${this.Myappurl}${this.Myapiurlpatp6}`,patrimoniocuentas);
  
}

////////////////////////
//Cuenta Distribucion//
//////////////////////


getcuentadistribucion2(): Observable<CDistrIntern2[]> {
     
  return this.http.get<CDistrIntern2[]>(this.Myappurl+this.Myapiurlcdg2);
}

postcuentadistribucion2  (cdistribucioncuentas: CDistrIntern2): Observable<CDistrIntern2>{

  return this.http.post<CDistrIntern2>(`${this.Myappurl}${this.Myapiurlcdp2}`,cdistribucioncuentas);
  
}


getcuentadistribucion3(): Observable<CDistrIntern3[]> {
     
  return this.http.get<CDistrIntern3[]>(this.Myappurl+this.Myapiurlcdg3);
}

postcuentadistribucion3  (cdistribucioncuentas: CDistrIntern3): Observable<CDistrIntern3>{

  return this.http.post<CDistrIntern3>(`${this.Myappurl}${this.Myapiurlcdp3}`,cdistribucioncuentas);
  
}


getcuentadistribucion4(): Observable<CDistrIntern4[]> {
     
  return this.http.get<CDistrIntern4[]>(this.Myappurl+this.Myapiurlcdg4);
}

postcuentadistribucion4  (cdistribucioncuentas: CDistrIntern4): Observable<CDistrIntern4>{

  return this.http.post<CDistrIntern4>(`${this.Myappurl}${this.Myapiurlcdp4}`,cdistribucioncuentas);
  
}




getcuentadistribucion5(): Observable<CDistrIntern5[]> {
     
  return this.http.get<CDistrIntern5[]>(this.Myappurl+this.Myapiurlcdg5);
}

postcuentadistribucion5  (cdistribucioncuentas: CDistrIntern5): Observable<CDistrIntern5>{

  return this.http.post<CDistrIntern5>(`${this.Myappurl}${this.Myapiurlcdp5}`,cdistribucioncuentas);
  
}


getcuentadistribucion6(): Observable<CDistrIntern6[]> {
     
  return this.http.get<CDistrIntern6[]>(this.Myappurl+this.Myapiurlcdg6);
}

postcuentadistribucion6  (cdistribucioncuentas: CDistrIntern6): Observable<CDistrIntern6>{

  return this.http.post<CDistrIntern6>(`${this.Myappurl}${this.Myapiurlcdp6}`,cdistribucioncuentas);
  
}



////////////////////////
//Cuenta Producto  ////
//////////////////////


getcuentaproducto2(): Observable<CProductosIntern2[]> {
     
  return this.http.get<CProductosIntern2[]>(this.Myappurl+this.Myapiurlcpg2);
}

postcuentaproducto2 (cproductocuentas: CProductosIntern2): Observable<CProductosIntern2>{

  return this.http.post<CProductosIntern2>(`${this.Myappurl}${this.Myapiurlcpp2}`,cproductocuentas);
  
}


getcuentaproducto3(): Observable<CProductosIntern3[]> {
     
  return this.http.get<CProductosIntern3[]>(this.Myappurl+this.Myapiurlcpg3);
}

postcuentaproducto3 (cproductocuentas: CProductosIntern3): Observable<CProductosIntern3>{

  return this.http.post<CProductosIntern3>(`${this.Myappurl}${this.Myapiurlcpp3}`,cproductocuentas);
  
}


getcuentaproducto4(): Observable<CProductosIntern4[]> {
     
  return this.http.get<CProductosIntern4[]>(this.Myappurl+this.Myapiurlcpg4);
}

postcuentaproducto4 (cproductocuentas: CProductosIntern4): Observable<CProductosIntern4>{

  return this.http.post<CProductosIntern4>(`${this.Myappurl}${this.Myapiurlcpp4}`,cproductocuentas);
  
}

getcuentaproducto5(): Observable<CProductosIntern5[]> {
     
  return this.http.get<CProductosIntern5[]>(this.Myappurl+this.Myapiurlcpg5);
}

postcuentaproducto5 (cproductocuentas: CProductosIntern5): Observable<CProductosIntern5>{

  return this.http.post<CProductosIntern5>(`${this.Myappurl}${this.Myapiurlcpp5}`,cproductocuentas);
  
}



getcuentaproducto6(): Observable<CProductosIntern6[]> {
     
  return this.http.get<CProductosIntern6[]>(this.Myappurl+this.Myapiurlcpg6);
}

postcuentaproducto6 (cproductocuentas: CProductosIntern6): Observable<CProductosIntern6>{

  return this.http.post<CProductosIntern6>(`${this.Myappurl}${this.Myapiurlcpp6}`,cproductocuentas);
  
}


////////////////////////
//Costos de Operacion//
//////////////////////


getcostooperacion2(): Observable<COperacionIntern2[]> {
     
  return this.http.get<COperacionIntern2[]>(this.Myappurl+this.Myapiurlcog2);
}

postcostooperacion2 (ccostooperacion: COperacionIntern2): Observable<COperacionIntern2>{

  return this.http.post<COperacionIntern2>(`${this.Myappurl}${this.Myapiurlcop2}`,ccostooperacion);
  
}



getcostooperacion3(): Observable<COperacionIntern3[]> {
     
  return this.http.get<COperacionIntern3[]>(this.Myappurl+this.Myapiurlcog3);
}

postcostooperacion3 (ccostooperacion: COperacionIntern3): Observable<COperacionIntern3>{

  return this.http.post<COperacionIntern3>(`${this.Myappurl}${this.Myapiurlcop3}`,ccostooperacion);
  
}


getcostooperacion4(): Observable<COperacionIntern4[]> {
     
  return this.http.get<COperacionIntern4[]>(this.Myappurl+this.Myapiurlcog4);
}

postcostooperacion4 (ccostooperacion: COperacionIntern4): Observable<COperacionIntern4>{

  return this.http.post<COperacionIntern4>(`${this.Myappurl}${this.Myapiurlcop4}`,ccostooperacion);
  
}


getcostooperacion5(): Observable<COperacionIntern5[]> {
     
  return this.http.get<COperacionIntern5[]>(this.Myappurl+this.Myapiurlcog5);
}

postcostooperacion5 (ccostooperacion: COperacionIntern5): Observable<COperacionIntern5>{

  return this.http.post<COperacionIntern5>(`${this.Myappurl}${this.Myapiurlcop5}`,ccostooperacion);
  
}


getcostooperacion6(): Observable<COperacionIntern6[]> {
     
  return this.http.get<COperacionIntern6[]>(this.Myappurl+this.Myapiurlcog6);
}

postcostooperacion6 (ccostooperacion: COperacionIntern6): Observable<COperacionIntern6>{

  return this.http.post<COperacionIntern6>(`${this.Myappurl}${this.Myapiurlcop6}`,ccostooperacion);
  
}





}
