import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medesen } from '../Interfaz/medesen';
import { PacInt } from '../Interfaz/pac-int';


@Injectable({
  providedIn: 'root'
})
export class PacientinService {

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/paciente/';
  constructor(private http: HttpClient) {}


  getpaciente(): Observable<PacInt[]> {
   
    return this.http.get<PacInt[]>(this.Myappurl+this.Myapiurl);
  }
  getidpersonal(id:number): Observable<Medesen>{

    return this.http.get<Medesen>(`${this.Myappurl}${this.Myapiurl}${id}`)

  }
 
  
  addmedicamentoesencial  (addesecir: Medesen): Observable<Medesen>{

    return this.http.post<Medesen>(`${this.Myappurl}${this.Myapiurl}`,addesecir);
    
  }

  addpaciente (addpaciente:PacInt): Observable<PacInt>{
    return this.http.post<PacInt>(`${this.Myappurl}${this.Myapiurl}`,addpaciente);
    
  }



  deletePersonal(id:number): Observable<void>{
   return this.http.delete<void>(`${this.Myappurl}${this.Myapiurl}${id}`);
  }
 
  addPersonal  (personal: Medesen): Observable<Medesen>{

    return this.http.post<Medesen>(`${this.Myappurl}${this.Myapiurl}`,personal);
  
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

