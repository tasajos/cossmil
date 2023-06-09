import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inter } from '../Interfaz/inter';
import { cirugiaInter } from '../Interfaz/cirugia';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  private Myappurl: string = environment.endpoint;
 // private apiUrl = 'https://api.twitter.com/1.1/search/tweets.json'; // Definir la URL de la API de Twitter

  //private Myappurl: string = "localhost/7105/";
  private Myapiurl: string = 'api/farmacia/';
  private geturl: string = 'sum-medicamento-pedida';

  constructor(private http: HttpClient) {}
    getPersonal(): Observable<Inter[]> {

      //return this.http.get<Inter[]>(`${this.Myappurl}${this.Myapiurl}`);
      return this.http.get<Inter[]>(this.Myappurl+this.Myapiurl);
    }

    getidpersonal(id:number): Observable<Inter>{

      return this.http.get<Inter>(`${this.Myappurl}${this.Myapiurl}${id}`)

    }
   
    //addPersonal  (): Observable<Inter>{
      addmedicamento  (frm: Inter): Observable<Inter>{

      return this.http.post<Inter>(`${this.Myappurl}${this.Myapiurl}`,frm);
      //return this.http.post<Mascota>(`${this.myAppUrl}${this.myApiUrl}`, mascota);
    // return this.http.post<Inter[]>(this.Myappurl+this.Myapiurl)personal);
    }
    addprogramacioncirugia  (progcir: cirugiaInter): Observable<cirugiaInter>{

      return this.http.post<cirugiaInter>(`${this.Myappurl}${this.Myapiurl}`,progcir);
      
    }


    deletePersonal(id:number): Observable<void>{
     return this.http.delete<void>(`${this.Myappurl}${this.Myapiurl}${id}`);
    }
   
    addPersonal  (personal: Inter): Observable<Inter>{

      return this.http.post<Inter>(`${this.Myappurl}${this.Myapiurl}`,personal);
      //return this.http.post<Mascota>(`${this.myAppUrl}${this.myApiUrl}`, mascota);
    // return this.http.post<Inter[]>(this.Myappurl+this.Myapiurl)personal);
    }

    sumCantidadPedida(codigovademecum: string): Observable<number> {
      const url = `${this.Myappurl}${this.Myapiurl}sum-cantidad-pedida/${codigovademecum}`;
      return this.http.get<number>(url);
    }
  
    getSumCantidadPedida(codigovademecum: string): Observable<any> {
      const url = `${this.Myappurl}${this.Myapiurl}sum-cantidad-pedida/${codigovademecum}`;
      return this.http.get<any>(url);
    }
 getlismed(): Observable<Inter[]> {

      //return this.http.get<Inter[]>(`${this.Myappurl}${this.Myapiurl}`);
      return this.http.get<Inter[]>(this.Myappurl+this.Myapiurl+this.geturl);
    
 }
      CodeError(code:string){
        switch(code){
          //el correo ya existe
          case 'auth/email-already-in-use':
            return 'El usuario ya existe'
            //contrase;a debil
          case 'auth/weak-password':
            return 'La contraseña es muy debil'
            //correo invalido
         case 'auth/invalid-email':
            return 'Correo Invalido'
          default:
            return 'Error desconocido'
    //Contraseña Incorrecta
            case 'auth/wrong-password':
              return 'Contraseña Incorrecta'
    
    
           //Usuario no Encontrado
              case 'auth/user-not-found':
                return 'Usuario no Encontrado'
        }
    }
    
   }

