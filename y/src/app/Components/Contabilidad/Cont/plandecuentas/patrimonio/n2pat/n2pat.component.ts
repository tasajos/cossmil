import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContabiliadService } from 'src/app/services/contabiliad.service';
import { HttpClient } from '@angular/common/http';
import { PasivoIntern2, PatrimonioIntern2 } from 'src/app/Interfaz/contabilidad';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-n2pat',
  templateUrl: './n2pat.component.html',
  styleUrls: ['./n2pat.component.css']
})
export class N2patComponent implements OnInit {

  formulario: FormGroup;
  activos: PatrimonioIntern2[] = [];


  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _rcontabilidadchicaService: ContabiliadService,
    private router: Router,private http: HttpClient,
    private route: ActivatedRoute
    ) {

    this.formulario = this.fb.group({
      nivel: ['', Validators.required],
      nombrecuenta: ['', Validators.required],
      cuentamayor: ['', Validators.required],
      activonivel: ['', Validators.required],
      numero: ['', Validators.required],
    });

  }

  registrarcuenta() {
    const rcactivo: PatrimonioIntern2 = {
      nivel: this.formulario.value.nivel,  
      nombrecuenta: this.formulario.value.nombrecuenta,
      cuentamayor: this.formulario.value.cuentamayor,
      activonivel: this.formulario.value.activonivel,
      totalnum: this.formulario.value.totalnum,
      numero: this.formulario.value.numero,
      activoniveln2: this.formulario.value.activonivel,
           
    };
    console.log
// Enviamos objeto al backend
this._rcontabilidadchicaService.postpatrimonion2(rcactivo).subscribe(_data => {
  this.mensajeExito('registrado');
  location.reload();
  this.router.navigate(['/ppasivo']);
})

  }

  mensajeExito(texto: string) {
    this._snackBar.open(`El proceso fue realizado y ${texto} con exito`,'', {
      duration: 2000,
      horizontalPosition: 'right',
    });
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

    this._rcontabilidadchicaService.getpatrimonion2().subscribe(
      (activos: PatrimonioIntern2[]) => {
        this.activos = activos;
      },
      (error) => {
        console.error('Error al obtener los datos de getactivo():', error);
      });
    }
  

}