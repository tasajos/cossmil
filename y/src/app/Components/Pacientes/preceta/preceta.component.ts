import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {RecInt} from 'src/app/Interfaz/rec-int';
import { RecetaservicesService } from 'src/app/services/recetaservices.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-preceta',
  templateUrl: './preceta.component.html',
  styleUrls: ['./preceta.component.css']
})
export class PrecetaComponent {
  formulario:FormGroup;
  pieza: any;    


  constructor(private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rrecetaservice:RecetaservicesService,
    private aRoute: ActivatedRoute,
    private router: Router,private http: HttpClient) 
    
    {
		
    //construimos el formulario

    this.formulario = this.fb.group({
      pieza: ['',Validators.required],
      doctor: ['',Validators.required],
      fechai: ['',Validators.required],
      horai: ['',Validators.required],
      fechaf: ['',Validators.required],
      recordatorio: ['',Validators.required],
      receta: ['',Validators.required],
      lapso: ['',Validators.required],
        
      
    })


  
}
ngOnInit(): void {
  this.obtenerPacientesactivos();
  }

  agregarreceta(){

   //armamos el objeto
    const rreceta: RecInt = {
      pieza: this.formulario.value.pieza,
      doctor:this.formulario.value.doctor,
      fechai:this.formulario.value.fechai,
      horai:this.formulario.value.horai,
      fechaf:this.formulario.value.fechaf,
      recordatorio:this.formulario.value.recordatorio,
      receta:this.formulario.value.receta,
      lapso:this.formulario.value.lapso,
         
    }
    console.log(rreceta)
    // Enviamos objeto al backend

    this._rrecetaservice.addReceta(rreceta).subscribe(_data => {
      this.mensajeExito('registrado');
      this.formulario.reset();
      this.router.navigate(['/preceta']);
    })

         
  }
  mensajeExito(texto: string) {
    this._snackBar.open(`El Registro fue realizado ${texto} con exito`,'', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }

  obtenerPacientesactivos() {
    this.http.get<any>('https://localhost:7250/api/Paciente/activos').subscribe(
      response => {
        this.pieza  = response;
      },
      error => console.log(error)
    );
  }
    
}

