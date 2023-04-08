import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { CirugiaservService } from 'src/app/services/cirugiaserv.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { cirugiaInter } from 'src/app/Interfaz/cirugia';
import { MservesencService } from 'src/app/services/mservesenc.service';
import { Medesen } from 'src/app/Interfaz/medesen';

@Component({
  selector: 'app-medicamento-esencial',
  templateUrl: './medicamento-esencial.component.html',
  styleUrls: ['./medicamento-esencial.component.css']
})
export class MedicamentoEsencialComponent {
  formulario:FormGroup;
  
  
  
  constructor(private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rmedicamentoService:MservesencService,
    private aRoute: ActivatedRoute,
    private router: Router,) 
    
    {
		
    //construimos el formulario

    this.formulario = this.fb.group({
      codigo: ['',Validators.required],
      descripcion: ['',Validators.required],
      forma: ['',Validators.required],
      concentracion: ['',Validators.required],
        
      
    })


  
}
ngOnInit(): void {
    
  }

  agregarmedicamento(){

   //armamos el objeto
    const rmedicamento: Medesen = {
      codigo: this.formulario.value.codigo,
      descripcion:this.formulario.value.descripcion,
      forma:this.formulario.value.forma,
      concentracion:this.formulario.value.concentracion,
         
    }
    console.log(rmedicamento)
    // Enviamos objeto al backend

    this._rmedicamentoService.addmedicamentoesencial(rmedicamento).subscribe(_data => {
      this.mensajeExito('registrado');
      this.formulario.reset();
      this.router.navigate(['/medsencial']);
    })

         
  }
  mensajeExito(texto: string) {
    this._snackBar.open(`El Registro fue realizado ${texto} con exito`,'', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }


    
}

