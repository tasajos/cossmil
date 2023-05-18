import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cajachicaInter } from '../Interfaz/cajachica';



@Injectable({
  providedIn: 'root'
})
export class CajachicaService {

  //entorno para llamar

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Cajachica/';

//constructor
  constructor(private http: HttpClient) { }

  //funcion obtener resultados
  getcaja(): Observable<cajachicaInter[]> {
     
    return this.http.get<cajachicaInter[]>(this.Myappurl+this.Myapiurl);
  }

  




}
