import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {CajachicaService} from 'src/app/services/cajachica.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { registrocajachicaInter } from 'src/app/Interfaz/cajachica';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-egrcajachica',
  templateUrl: './egrcajachica.component.html',
  styleUrls: ['./egrcajachica.component.css']
})
export class EgrcajachicaComponent implements OnInit {
 
  formulario:FormGroup;
    constructor (private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rcajachicaService:CajachicaService,
    private aRoute: ActivatedRoute,
    private router: Router,private http: HttpClient) {

    this.formulario = this.fb.group({
      monto: ['',Validators.required],
      transacciones: ['',Validators.required],
      fechai: [this.getFormattedDate(), Validators.required], // Autocompletar con la fecha actual
      aprobaciones: ['',Validators.required],
      comentario: ['',Validators.required],
      
      
          
      
    })

  }
  ngOnInit(): void {
    
    }
    getFormattedDate(): string {
      const today = new Date();
      const year = today.getFullYear();
      const month = `${today.getMonth() + 1}`.padStart(2, '0');
      const day = `${today.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

gastoregistrocajachica(){

//armamos el objeto
const rcajachica: registrocajachicaInter = {
  monto: this.formulario.value.monto,
  transacciones:this.formulario.value.transacciones,
  fechai:this.formulario.value.fechai,
  aprobaciones:this.formulario.value.aprobaciones,
  comentario:this.formulario.value.comentario,
  
}
console.log
// Enviamos objeto al backend

this._rcajachicaService.addgastocajachica(rcajachica).subscribe(_data => {
  this.mensajeExito('registrado');
  this.router.navigate(['/contabilidad']);
})
    
}
mensajeExito(texto: string) {
  this._snackBar.open(`El registro fue realizado ${texto} con exito`,'', {
    duration: 2000,
    horizontalPosition: 'right',
  });
}

}


