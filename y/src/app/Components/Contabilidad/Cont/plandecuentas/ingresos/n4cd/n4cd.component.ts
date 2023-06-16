import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContabiliadService } from 'src/app/services/contabiliad.service';
import { HttpClient } from '@angular/common/http';
import { PatrimonioIntern3,PatrimonioIntern4,CDistrIntern3,CDistrIntern4 } from 'src/app/Interfaz/contabilidad';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-n4cd',
  templateUrl: './n4cd.component.html',
  styleUrls: ['./n4cd.component.css']
})
export class N4cdComponent implements OnInit {
  formulario: FormGroup;
  activos: CDistrIntern3[] = [];
  filteredActivos: CDistrIntern3[] = []; // Lista filtrada de activos

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _rcontabilidadchicaService: ContabiliadService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      nivel: ['', Validators.required],
      nombrecuenta: ['', Validators.required],
      cuentamayor: ['', Validators.required],
      totalnum: ['', Validators.required],
      numero: ['', Validators.required],
         });
  }

  registrarcuenta() {

     const rcactivo: CDistrIntern4 = {
      nivel: this.formulario.value.nivel,
      nombrecuenta: this.formulario.value.nombrecuenta,
      cuentamayor: this.formulario.value.cuentamayor,
      totalnum: this.formulario.value.totalnum,
      numero: this.formulario.value.numero,
     
    };

    // Enviamos objeto al backend
    this._rcontabilidadchicaService.postcuentadistribucion4(rcactivo).subscribe(_data => {
      this.mensajeExito('registrado');
      location.reload();
      this.router.navigate(['/ppasivo4']);
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
   this.formulario.get('nivel')?.valueChanges.subscribe(nivelSeleccionado => {
    let cuentamayor = 0;
    switch (nivelSeleccionado) {
      case '4':
        cuentamayor = 3;
        break;
      case '5':
        cuentamayor = 4;
        break;
      case '6':
        cuentamayor = 5;
        break;
    }
    this.formulario.patchValue({ cuentamayor });

    // Filtrar activos
    if (cuentamayor === 2) {
      this.filteredActivos = this.activos.filter(activo => activo.nivel === 3);
    } else {
      this.filteredActivos = this.activos;
    }
  });

  this._rcontabilidadchicaService.getcuentadistribucion3().subscribe(
    (activos: CDistrIntern3[]) => {
      this.activos = activos;
      this.filteredActivos = activos; // Inicialmente, mostrar todos los activos
    },
    (error) => {
      console.error('Error al obtener los datos de getactivo():', error);
    }
  );
}}


