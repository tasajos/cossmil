import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContabiliadService } from 'src/app/services/contabiliad.service';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css']
})
export class ActivoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _rcontabilidadchicaService: ContabiliadService,
    private http: HttpClient) {

    this.formulario = this.fb.group({
      nivel: ['', Validators.required],
      nombrecuenta: ['', Validators.required],
      cuentamayor: ['', Validators.required],
    });

  }

  registrarcuenta() {
   //const nivelControl = this.formulario.get('nivel') as FormControl;
    //const nivelSeleccionado = nivelControl.value;
  
    //if (nivelSeleccionado === '1') {
      // Establecer cuentamayor en 0
      //this.formulario.patchValue({ cuentamayor: 0 });
    //}
  }

  ngOnInit(): void {

    //logica del campo
    this.formulario.get('nivel')?.valueChanges.subscribe(nivelSeleccionado => {
      if (nivelSeleccionado === '1') {
        // Establecer cuentamayor en 0
        this.formulario.patchValue({ cuentamayor: 0 });
      } else if (nivelSeleccionado === '2') {
        this.formulario.patchValue({ cuentamayor: 1 });
      } else if (nivelSeleccionado === '3') {
        this.formulario.patchValue({ cuentamayor: 2 });
      } else if (nivelSeleccionado === '4') {
        this.formulario.patchValue({ cuentamayor: 3 });
      } else if (nivelSeleccionado === '5') {
        this.formulario.patchValue({ cuentamayor: 4 });
      }
      else if (nivelSeleccionado === '6') {
        this.formulario.patchValue({ cuentamayor: 5 });
      }
    });
  }

}