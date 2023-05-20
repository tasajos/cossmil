import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ValidatorFn  } from '@angular/forms';
import { CajachicaService } from 'src/app/services/cajachica.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { registrocajachicaInter } from 'src/app/Interfaz/cajachica';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-egrcajachica',
  templateUrl: './egrcajachica.component.html',
  styleUrls: ['./egrcajachica.component.css']
})
export class EgrcajachicaComponent implements OnInit {
 
  formulario: FormGroup;
  ultimoMontotr: number | undefined;
  nrorecibo: string =''; 

  constructor(
    private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rcajachicaService: CajachicaService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      monto: ['', [Validators.required, this.numberValidator()]],
      transacciones: ['', Validators.required],
      fechai: [this.getFormattedDate(), Validators.required],
      aprobaciones: ['', Validators.required],
      comentario: ['', Validators.required],
      nrorecibo: [this.nrorecibo, Validators.required],
      
    });
  }
  numberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (isNaN(value) || typeof value !== 'number') {
        return { numeric: true };
      }
      return null;
    };
  }

  restrictToNumbers(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    const keyPressed = event.key;
  
    if (!allowedKeys.includes(keyPressed)) {
      const isNumericInput = /^\d+$/.test(keyPressed);
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
  
      if (!isNumericInput || isModifierKey) {
        event.preventDefault();
      }
    }
  }

  restrictInput(event: KeyboardEvent) {
    event.preventDefault();
  }
  

  ngOnInit(): void {
    this.obtenerProximoNroRecibo();

   }

   obtenerProximoNroRecibo() {
    this._rcajachicaService.getProximoNroRecibo().subscribe((proximoNro: any) => {
      console.log(proximoNro);
      if (proximoNro && proximoNro.length > 0) {
        const currentNroRecibo = parseInt(proximoNro[0]);
        const nextNroRecibo = currentNroRecibo + 1;
        this.nrorecibo = nextNroRecibo.toString(); // Asignar el valor a nrorecibo
        this.formulario.get('nrorecibo')?.setValue(this.nrorecibo); // Establecer el valor en el formulario
      }
    });
  }
  
  
  

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
      monto: this.formulario.value.monto.toString(),
      transacciones: this.formulario.value.transacciones,
      fechai: fechaiValue,
      aprobaciones: this.formulario.value.aprobaciones,
      comentario: this.formulario.value.comentario,
      nrorecibo: this.formulario.value.nrorecibo,
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
