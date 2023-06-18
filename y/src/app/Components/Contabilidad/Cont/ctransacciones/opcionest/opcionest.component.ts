import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransaccionesService } from 'src/app/services/transacciones.service';
import { HttpClient } from '@angular/common/http';
import { ingresoInter,opcionesInter } from 'src/app/Interfaz/transacciones';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-opcionest',
  templateUrl: './opcionest.component.html',
  styleUrls: ['./opcionest.component.css']
})
export class OpcionestComponent  implements OnInit {
  formulario: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _ringresosservice: TransaccionesService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      //fechat: ['', Validators.required],
      numero: ['', Validators.required],
      //concepto: ['', Validators.required],
      //cantidad: ['', Validators.required],
      //moneda: ['', Validators.required],
         });

         
  }

  registraropciones() {

     const rcactivo: opcionesInter = {
      //fechat: this.formulario.value.fechat,
      numero: this.formulario.value.numero
      //numero: parseInt(this.formulario.value.numero),
      //numero: Number(this.formulario.value.numero),
      //concepto: this.formulario.value.concepto,
      //cantidad: this.formulario.value.cantidad,
      //moneda: this.formulario.value.moneda,
     
    };

    // Enviamos objeto al backend
    this._ringresosservice.postopcionescuentas(rcactivo).subscribe(_data => {
      this.mensajeExito('registrado');
      location.reload();
      this.router.navigate(['/opcionest']);
      
    });
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`El proceso fue realizado y ${texto} con exito`, '', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }

  ngOnInit(): void {

    
   // Lógica del campo
}

}


