import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cajachicaInter } from '../Interfaz/cajachica';
import { registrocajachicaInter } from '../Interfaz/cajachica';
import { aperturacajachicaInter } from '../Interfaz/cajachica';
import { copiarcajachicaInter } from '../Interfaz/cajachica';
import { nroreciboInter } from '../Interfaz/cajachica';
import { cierrecajachicaInter } from '../Interfaz/cajachica';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CajachicaService {

  //entorno para llamar

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Cajachica/';
  private Myapiurlc: string = 'api/Aperturacajachica/';
  private Myapiurlf: string = 'api/Aperturacajachica/fecha';
  private Myapiurlg: string = 'api/RegGcajachica';
  private Myapiurlgt: string = 'api/RegGcajachica/totalgastos';
  private Myapiurlrc: string = 'api/ResultadoCajaChica/ultimomontotr';
  private Myapiurlpcc: string = 'api/ResultadoCajaChica/actualizarmontotr';
  private Myapiurlnr: string = 'api/NroRecibo';
  private Myapiurlcc: string = 'api/CierrreCaja';

  
  

//constructor
  constructor(private http: HttpClient) { }

  //funcion obtener resultados
  getcaja(): Observable<cajachicaInter[]> {
     
    return this.http.get<cajachicaInter[]>(this.Myappurl+this.Myapiurl);
  }

  //funcion obtener resultados
  getcajachica(): Observable<registrocajachicaInter[]> {
     
    return this.http.get<registrocajachicaInter[]>(this.Myappurl+this.Myapiurlg);
  }


  addcaja  (caja: cajachicaInter): Observable<cajachicaInter>{

      return this.http.post<cajachicaInter>(`${this.Myappurl}${this.Myapiurl}`,caja);
      
    }

    addcajachica  (cajachica: aperturacajachicaInter): Observable<aperturacajachicaInter>{

      return this.http.post<aperturacajachicaInter>(`${this.Myappurl}${this.Myapiurlc}`,cajachica);
      
    }

    getcajafecha(): Observable<aperturacajachicaInter | null> {
      return this.http.get<aperturacajachicaInter[]>(this.Myappurl + this.Myapiurlf).pipe(
        map((data: aperturacajachicaInter[]) => {
          if (data && data.length > 0) {
            return data[0];
          } else {
            return null; // Valor por defecto si no se encuentra ningún registro
          }
        }),
        catchError((error: any) => {
          console.error(error);
          return throwError('Error al obtener los datos de apertura de caja chica');
        })
      );
    }

    addgastocajachica  (gastochica: registrocajachicaInter): Observable<registrocajachicaInter>{

      return this.http.post<registrocajachicaInter>(`${this.Myappurl}${this.Myapiurlg}`,gastochica);
      
    }

    verquerycajachica(): Observable<number> {
      return this.http.get<number>(`${this.Myappurl}${this.Myapiurlrc}`);
    }

    actualizarcaja(): Observable<any> {
      return this.http.post<copiarcajachicaInter>(`${this.Myappurl}${this.Myapiurlpcc}`, null);
    }
    getUltimoMontotr(): Observable<number> {
      return this.http.get<number>(`${this.Myappurl}${this.Myapiurlrc}`);
    }
    getProximoNroRecibo(): Observable<number> {
      return this.http.get<number>(`${this.Myappurl}${this.Myapiurlnr}`);
    }
    
    actualizarnrorecibo  (recibonro: nroreciboInter): Observable<nroreciboInter>{

      return this.http.post<nroreciboInter>(`${this.Myappurl}${this.Myapiurlnr}`,recibonro);
      
    }
    getgastoscajachica(): Observable<number | null> {
      return this.http.get<number>(this.Myappurl + this.Myapiurlgt).pipe(
        catchError((error: any) => {
          console.error(error);
          return throwError('Error retrieving caja chica expenses');
        })
      );
    }

    cierrecaja  (ccierre: cierrecajachicaInter): Observable<cierrecajachicaInter>{

      return this.http.post<cierrecajachicaInter>(`${this.Myappurl}${this.Myapiurlcc}`,ccierre);
      
    }
    

    }
  
