import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Inter } from 'src/app/Interfaz/inter';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-r2t',
  templateUrl: './r2t.component.html',
  styleUrls: ['./r2t.component.css']
})
export class R2tComponent implements OnInit{
  loading:boolean = false;
  form:FormGroup;
  id: number;
  

  operacion: string = 'Agregar';


  constructor (private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _personalesService:ServService,
    private aRoute: ActivatedRoute,
    private router: Router,) {

      this.form = this.fb.group({
        codigosiga: ['',Validators.required],
        codigoVademecum: ['',Validators.required],
        unidad: ['',Validators.required],
        descripcion: ['',Validators.required],
        fechav: ['',Validators.required],
        cantidadp: ['',Validators.required],
        observaciones: ['',Validators.required],
      
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    
  } 
  
  ngOnInit (): void { 

  }
  display: any;
  

  agregarEditarPersonal() {
  

    // Armamos el objeto
    const personal: Inter = {
      codigosiga: this.form.value.codigosiga,
      codigoVademecum:this.form.value.codigoVademecum,
      unidad:this.form.value.unidad,
      descripcion:this.form.value.descripcion,
      fechav:this.form.value.fechav,
      cantidadpedida:this.form.value.cantidadpedida,
      observaciones:this.form.value.observaciones,
      
      
    }
   

  }

  agregarPersonal(){

   

    //armamos el objeto
    const personal: Inter = {
      codigosiga: this.form.value.codigosiga,
      codigoVademecum:this.form.value.codigoVademecum,
      unidad:this.form.value.unidad,
      descripcion:this.form.value.descripcion,
      fechav:this.form.value.fechav,
      cantidadpedida:this.form.value.cantidadpedida,
      observaciones:this.form.value.observaciones,
      
    }
    console.log(personal)
    // Enviamos objeto al backend

    this._personalesService.addPersonal(personal).subscribe(_data => {
      this.mensajeExito('registrada');
      this.router.navigate(['/listar']);
    })

         
  }
  mensajeExito(texto: string) {
    this._snackBar.open(`El Registro fue realizado ${texto} con exito`,'', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }
  enviarWhatsApp() {
    const telefonos = ['59170776212', '59179391400'] ; // Reemplaza con el número de teléfono deseado
    const mensaje = `Hola, te contacto desde la empresa. Los datos de registro son:\n\nNombre: ${this.form.value.nombre} ${this.form.value.apellido}\nTipo: ${this.form.value.tipo}\nTeléfono: ${this.form.value.telefono}\nDetalle: ${this.form.value.detalle}\nPedido: ${this.form.value.pedido}\nCantidad: ${this.form.value.cantidad}\nColor: ${this.form.value.color}\nPrecio: ${this.form.value.precio}\nUbicación: ${this.form.value.ubicacion}`;

    telefonos.forEach(telefono => {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
      window.open(whatsappUrl);
    });

   // const whatsappUrl = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    //window.open(whatsappUrl);
  }

}



