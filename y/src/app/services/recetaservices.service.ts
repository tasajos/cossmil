import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inter } from '../Interfaz/inter';
import { RecInt } from '../Interfaz/rec-int';
import { cirugiaInter } from '../Interfaz/cirugia';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

//import { groupBy } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class RecetaservicesService {
  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/recetas/';
  private geturl: string = 'sum-medicamento-pedida';

  constructor(private http: HttpClient) {}

    getPersonal(): Observable<Inter[]> {

      //return this.http.get<Inter[]>(`${this.Myappurl}${this.Myapiurl}`);
      return this.http.get<Inter[]>(this.Myappurl+this.Myapiurl);
    }

    getReceta(): Observable<RecInt[]> {

      //return this.http.get<Inter[]>(`${this.Myappurl}${this.Myapiurl}`);
      return this.http.get<RecInt[]>(this.Myappurl+this.Myapiurl);
    }

    getRecetaAlert(): Observable<RecInt[]> {
      return this.http.get<RecInt[]>(this.Myappurl + this.Myapiurl)
        .pipe(
          map(recetas => {
            return recetas.filter(receta => {
              // Obtener fecha y hora actual
              const now = moment();
              
              // Obtener fecha y hora de inicio
              const fechaInicio = moment(receta.fechai + ' ' + receta.horai, 'YYYY-MM-DD HH:mm');
              
              // Calcular diferencia en horas
              const horasDiferencia = moment.duration(now.diff(fechaInicio)).asHours();
              
              // Obtener lapso de la receta
              const lapso = parseInt(receta.lapso);
              
              // Generar alerta si se cumple la condición
              if (horasDiferencia >= 0 && horasDiferencia % lapso === 0) {
                // Generar alerta
                alert('Es hora de tomar la medicina');
              }
              
              return true;
            });
          })
        );
    }

    getRecetaAlert2(): Observable<RecInt[]> {
      return this.http.get<RecInt[]>(this.Myappurl + this.Myapiurl)
        .pipe(
          map(recetas => {
            const now = moment();
            const recetasActuales = recetas.filter(receta => {
              const fechaInicio = moment(receta.fechai + ' ' + receta.horai, 'YYYY-MM-DD HH:mm');
              return fechaInicio.isSame(now, 'day');
            });
            recetasActuales.forEach(receta => {
              // Generar alerta
              alert('Es hora de tomar la medicina');
            });
            return recetasActuales;
          })
        );
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
   
    addReceta  (receta: RecInt): Observable<RecInt>{

      return this.http.post<RecInt>(`${this.Myappurl}${this.Myapiurl}`,receta);
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

