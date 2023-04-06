import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {ServService} from 'src/app/services/serv.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Inter } from 'src/app/Interfaz/inter';

@Component({
  selector: 'app-rfarmacia',
  templateUrl: './rfarmacia.component.html',
  styleUrls: ['./rfarmacia.component.css']
})
export class RfarmaciaComponent implements OnInit {
 
  formulario:FormGroup;
 
 

  constructor (private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rfarmaciaService:ServService,
    private aRoute: ActivatedRoute,
    private router: Router,) {

    this.formulario = this.fb.group({
      codigosiga: ['',Validators.required],
      codigoVademecum: ['',Validators.required],
      unidad: ['',Validators.required],
      descripcion: ['',Validators.required],
      fechav: ['',Validators.required],
      cantidadpedida: ['',Validators.required],
      observaciones: ['',Validators.required],
     
      
    })


  
}
ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  agregarmedicamento(){

   //armamos el objeto
    const rfarmacia: Inter = {
      codigosiga: this.formulario.value.codigosiga,
      codigoVademecum:this.formulario.value.codigoVademecum,
      unidad:this.formulario.value.unidad,
      descripcion:this.formulario.value.descripcion,
      fechav:this.formulario.value.fechav,
      cantidadpedida:this.formulario.value.cantidadpedida,
      observaciones:this.formulario.value.observaciones,
    
    }
    console.log
    // Enviamos objeto al backend

    this._rfarmaciaService.addmedicamento(rfarmacia).subscribe(_data => {
      this.mensajeExito('registrado');
      this.router.navigate(['/farmacia']);
    })

         
  }
  mensajeExito(texto: string) {
    this._snackBar.open(`El Registro fue realizado ${texto} con exito`,'', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }
}