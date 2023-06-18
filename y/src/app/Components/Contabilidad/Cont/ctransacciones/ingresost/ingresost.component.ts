import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransaccionesService } from 'src/app/services/transacciones.service';
import { HttpClient } from '@angular/common/http';
import { ingresoInter,opcionesInter } from 'src/app/Interfaz/transacciones';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ingresost',
  templateUrl: './ingresost.component.html',
  styleUrls: ['./ingresost.component.css']
})
export class IngresostComponent implements OnInit {
  formulario: FormGroup;
  numero!: number;
  opcionesCuentas: opcionesInter[] = [];
  ultimoNumero: number = 0;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _ringresosservice: TransaccionesService,
    private _rnroreciboservice: TransaccionesService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      fechat: ['', Validators.required],
      numero: ['', Validators.required],
      concepto: ['', Validators.required],
      cantidad: ['', Validators.required],
      moneda: ['', Validators.required],
         });
  }

  registrarcuenta() {

     const rcactivo: ingresoInter = {
      fechat: this.formulario.value.fechat,
      numero: parseInt(this.formulario.value.numero),
      concepto: this.formulario.value.concepto,
      cantidad: this.formulario.value.cantidad,
      moneda: this.formulario.value.moneda,

    };
    // Enviamos objeto al backend
    this._ringresosservice.postingresocuentas(rcactivo).subscribe(_data => {
      this.mensajeExito('registrado');
      location.reload();
      this.router.navigate(['/ingresost']);;
      this.numero = this.numero + 1;

    //this.numero++; // Incrementamos el número después de cada registro exitoso
  });
      
    
  }

  registrarnrorecibo() {

    const rnros: opcionesInter = {
     numero: parseInt(this.formulario.value.numero),
     
   };

 // Enviamos objeto al backend
 this._rnroreciboservice.postopcionescuentas(rnros).subscribe(_data => {
  this.numero = this.numero + 1;


  this.obtenerUltimoNumero();
  //this.numero++; // Incrementamos el número después de cada registro exitoso
});
  }
  mensajeExito(texto: string) {
    this._snackBar.open(`El proceso fue realizado y ${texto} con exito`, '', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }

  ngOnInit(): void {

    this._ringresosservice.getopcionescuentas().subscribe((opcionesCuentas: opcionesInter[]) => {
      this.opcionesCuentas = opcionesCuentas;
      if (opcionesCuentas.length > 0) {
        this.ultimoNumero = opcionesCuentas[opcionesCuentas.length - 1].numero;
      }
       // Inicializamos el número con el valor obtenido del backend
       this.numero = this.ultimoNumero;

      this.formulario.patchValue({
        numero: this.ultimoNumero // Establecer el valor inicial del campo "numero"
      });
    });
   // Lógica del campo
}

obtenerUltimoNumero() {
  // Lógica para obtener el último número registrado desde el backend
  // Puedes usar el servicio _ringresosservice para hacer una solicitud HTTP y obtener el último número
  // Aquí se muestra un ejemplo estático:
  this._ringresosservice.getUltimoNumero().subscribe((ultimoNumero: number) => {
    this.numero = ultimoNumero + 1; // Incrementar el último número y asignarlo a la variable numero
    
  });
}

}

