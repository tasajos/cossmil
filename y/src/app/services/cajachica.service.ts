import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cajachicaInter } from '../Interfaz/cajachica';
import { aperturacajachicaInter } from '../Interfaz/cajachica';



@Injectable({
  providedIn: 'root'
})
export class CajachicaService {

  //entorno para llamar

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Cajachica/';
  private Myapiurlc: string = 'api/Aperturacajachica/';

//constructor
  constructor(private http: HttpClient) { }

  //funcion obtener resultados
  getcaja(): Observable<cajachicaInter[]> {
     
    return this.http.get<cajachicaInter[]>(this.Myappurl+this.Myapiurl);
  }


  addcaja  (caja: cajachicaInter): Observable<cajachicaInter>{

      return this.http.post<cajachicaInter>(`${this.Myappurl}${this.Myapiurl}`,caja);
      
    }

    addcajachica  (cajachica: aperturacajachicaInter): Observable<aperturacajachicaInter>{

      return this.http.post<aperturacajachicaInter>(`${this.Myappurl}${this.Myapiurlc}`,cajachica);
      
    }

}
