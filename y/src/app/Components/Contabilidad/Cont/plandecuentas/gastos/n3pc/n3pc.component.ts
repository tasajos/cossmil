import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContabiliadService } from 'src/app/services/contabiliad.service';
import { HttpClient } from '@angular/common/http';
import { CProductosIntern2,CProductosIntern3} from 'src/app/Interfaz/contabilidad';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-n3pc',
  templateUrl: './n3pc.component.html',
  styleUrls: ['./n3pc.component.css']
})
export class N3pcComponent implements OnInit {
  formulario: FormGroup;
  activos: CProductosIntern2[] = [];
  filteredActivos: CProductosIntern2[] = []; // Lista filtrada de activos

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
      totalnivel: ['', Validators.required],
         });
  }

  registrarcuenta() {

     const rcactivo: CProductosIntern3 = {
      nivel: this.formulario.value.nivel,
      nombrecuenta: this.formulario.value.nombrecuenta,
      cuentamayor: this.formulario.value.cuentamayor,
      totalnum: this.formulario.value.totalnum,
      numero: this.formulario.value.numero,
     
    };

    // Enviamos objeto al backend
    this._rcontabilidadchicaService.postcuentaproducto3(rcactivo).subscribe(_data => {
      this.mensajeExito('registrado');
      location.reload();
      this.router.navigate(['/cdistribucion3']);
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
      case '1':
        cuentamayor = 0;
        break;
      case '2':
        cuentamayor = 1;
        break;
      case '3':
        cuentamayor = 2;
        break;
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

  this._rcontabilidadchicaService.getcuentaproducto2().subscribe(
    (activos: CProductosIntern2[]) => {
      this.activos = activos;
      this.filteredActivos = activos; // Inicialmente, mostrar todos los activos
    },
    (error) => {
      console.error('Error al obtener los datos de getactivo():', error);
    }
  );
}}
