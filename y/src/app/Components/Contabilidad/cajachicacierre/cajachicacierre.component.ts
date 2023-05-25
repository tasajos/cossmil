import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CajachicaService } from 'src/app/services/cajachica.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { nroreciboInter, cierrecajachicaInter, aperturacajachicaInter } from 'src/app/Interfaz/cajachica';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cajachicacierre',
  templateUrl: './cajachicacierre.component.html',
  styleUrls: ['./cajachicacierre.component.css']
})
export class CajachicacierreComponent implements AfterViewInit, OnInit {
  formulario: FormGroup;
  monto: string = '';
  montoinicial: number = 0;
  transacciones: string[] = [];
  aprobaciones: string[] = ['Caja Chica Cerrada'];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _rcajachicaService: CajachicaService,
    private http: HttpClient
  ) {
    this.formulario = this.fb.group({
      monto: ['', Validators.required],
      responsable: ['', Validators.required],
    });
  }

  @ViewChild('inputPassword2', { static: false }) cajaChicaInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    const cajaChicaInput = this.cajaChicaInput.nativeElement;

    const btns = document.querySelectorAll('.btn');
    btns.forEach((btn: any) => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('btn-primary') && !btn.classList.contains('btn-secondary')) {
          const value = btn.innerText;
          cajaChicaInput.value += value;
        }
      });
    });
  }

  borrarCampo() {
    this.cajaChicaInput.nativeElement.value = '';
  }

  modalcierre() {
    this.router.navigate(['/modalcierre']);
  }

  ngOnInit(): void {}

  mensajeExito(texto: string) {
    this._snackBar.open(`El registro fue realizado ${texto} con exito`, '', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }

  registrarcierre() {
    const monto = this.formulario.get('monto')?.value;
    const responsable = this.formulario.get('responsable')?.value;

    const cierreCaja: cierrecajachicaInter = {
      monto: monto,
      responsable: responsable,
    };

    this._rcajachicaService.cierrecaja(cierreCaja).subscribe(
      (response) => {
        // Maneja la respuesta del servidor si es necesario
        console.log(response);
        // Restablece el formulario
        //this.formulario.reset();
      },
      (error) => {
        // Maneja los errores si es necesario
        console.error(error);
      }
    );
  }

  agregarNumero(numero: string) {
    this.monto += numero;
    this.formulario.get('monto')?.setValue(this.monto);
  }

  registrarMontoinicial() {
    //const monto = this.formulario.get('monto')?.value;
    const cajachica: aperturacajachicaInter = {
      montoinicial: 0,
      transacciones: "0",
      aprobaciones: this.aprobaciones[0],
      fechai: "0",
      comentario: "0",
      // Other required properties
    };

    this._rcajachicaService.addcajachica(cajachica).subscribe(
      (response) => {
        // Maneja la respuesta del servidor si es necesario
        console.log(response);
        location.reload();
      },
      (error) => {
        // Maneja los errores si es necesario
        console.error(error);
      }
    );
  }

  ejecutarAcciones(){
this.registrarMontoinicial();
this.registrarcierre();
this.recargarpagina();

  }

  recargarpagina(){
    location.reload();
  }
}
