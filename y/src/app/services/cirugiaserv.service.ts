import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cirugiaInter } from '../Interfaz/cirugia';

@Injectable({
  providedIn: 'root'
})
export class CirugiaservService {
  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/cirugia/';

  constructor(private http: HttpClient) {}
    getPersonal(): Observable<cirugiaInter[]> {
     
      return this.http.get<cirugiaInter[]>(this.Myappurl+this.Myapiurl);
    }
    getidpersonal(id:number): Observable<cirugiaInter>{

      return this.http.get<cirugiaInter>(`${this.Myappurl}${this.Myapiurl}${id}`)

    }
   
    
    addprogramacioncirugia  (progcir: cirugiaInter): Observable<cirugiaInter>{

      return this.http.post<cirugiaInter>(`${this.Myappurl}${this.Myapiurl}`,progcir);
      
    }


    deletePersonal(id:number): Observable<void>{
     return this.http.delete<void>(`${this.Myappurl}${this.Myapiurl}${id}`);
    }
   
    addPersonal  (personal: cirugiaInter): Observable<cirugiaInter>{

      return this.http.post<cirugiaInter>(`${this.Myappurl}${this.Myapiurl}`,personal);
    
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

