import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PacientinService } from 'src/app/services/pacientin.service';
import {PacInt} from 'src/app/Interfaz/pac-int';

@Component({
  selector: 'app-preceta',
  templateUrl: './preceta.component.html',
  styleUrls: ['./preceta.component.css']
})
export class PrecetaComponent {
  formulario:FormGroup;
      
  constructor(private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rpacienteservice:PacientinService,
    private aRoute: ActivatedRoute,
    private router: Router,) 
    
    {
		
    //construimos el formulario

    this.formulario = this.fb.group({
      pieza: ['',Validators.required],
      nombrepaciente: ['',Validators.required],
      doctor: ['',Validators.required],
      cuidado: ['',Validators.required],
      estado: ['',Validators.required],
      fecha: ['',Validators.required],
        
      
    })


  
}
ngOnInit(): void {
    
  }

  agregarpaciente(){

   //armamos el objeto
    const rpaciente: PacInt = {
      pieza: this.formulario.value.pieza,
      nombrepaciente:this.formulario.value.nombrepaciente,
      doctor:this.formulario.value.doctor,
      cuidado:this.formulario.value.cuidado,
      estado:this.formulario.value.estado,
      fecha:this.formulario.value.fecha,
         
    }
    console.log(rpaciente)
    // Enviamos objeto al backend

    this._rpacienteservice.addpaciente(rpaciente).subscribe(_data => {
      this.mensajeExito('registrado');
      this.formulario.reset();
      this.router.navigate(['/rpaciente']);
    })

         
  }
  mensajeExito(texto: string) {
    this._snackBar.open(`El Registro fue realizado ${texto} con exito`,'', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }


    
}

