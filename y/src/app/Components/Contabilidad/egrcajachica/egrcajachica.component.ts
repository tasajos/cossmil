import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CajachicaService } from 'src/app/services/cajachica.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { registrocajachicaInter } from 'src/app/Interfaz/cajachica';
import { Router } from '@angular/router';

@Component({
  selector: 'app-egrcajachica',
  templateUrl: './egrcajachica.component.html',
  styleUrls: ['./egrcajachica.component.css']
})
export class EgrcajachicaComponent implements OnInit {
 
  formulario: FormGroup;
  ultimoMontotr: number | undefined;

  constructor(
    private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rcajachicaService: CajachicaService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      monto: ['', Validators.required],
      transacciones: ['', Validators.required],
      fechai: [this.getFormattedDate(), Validators.required],
      aprobaciones: ['', Validators.required],
      comentario: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  getFormattedDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = `${today.getMonth() + 1}`.padStart(2, '0');
    const day = `${today.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  gastoregistrocajachica() {
    // Armamos el objeto
    const fechaiValue = this.formulario.value.fechai;
    const rcajachica: registrocajachicaInter = {
      monto: this.formulario.value.monto,
      transacciones: this.formulario.value.transacciones,
      fechai: fechaiValue,
      aprobaciones: this.formulario.value.aprobaciones,
      comentario: this.formulario.value.comentario,
    };

    // Actualizar caja antes de registrar el gasto
    this._rcajachicaService.actualizarcaja().subscribe(() => {
      // Llamada para obtener los datos actualizados
      this.obtenerUltimoMontotr();
      
      // Enviamos objeto al backend para el registro del gasto
      this._rcajachicaService.addgastocajachica(rcajachica).subscribe(_data => {
        this.mensajeExito('registrado');
        this.formulario.reset();
        this.formulario.patchValue({ fechai: fechaiValue });
        window.location.reload();
        //this.router.navigate(['/egcajachica']);
      });
    });
  }

  obtenerUltimoMontotr() {
    this._rcajachicaService.getUltimoMontotr().subscribe((data: number) => {
      this.ultimoMontotr = data;
    });
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`El registro fue realizado ${texto} con exito`, '', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }
}
