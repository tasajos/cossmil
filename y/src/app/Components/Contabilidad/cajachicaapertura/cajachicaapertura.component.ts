import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {CajachicaService} from 'src/app/services/cajachica.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { aperturacajachicaInter } from 'src/app/Interfaz/cajachica';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cajachicaapertura',
  templateUrl: './cajachicaapertura.component.html',
  styleUrls: ['./cajachicaapertura.component.css']
})
export class CajachicaaperturaComponent implements OnInit {
 
  formulario:FormGroup;
    constructor (private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rcajachicaService:CajachicaService,
    private aRoute: ActivatedRoute,
    private router: Router,private http: HttpClient) {

    this.formulario = this.fb.group({
      montoinicial: ['',Validators.required],
      transacciones: ['',Validators.required],
      fechai: ['',Validators.required],
      aprobaciones: ['',Validators.required],
      comentario: ['',Validators.required],
      
      
          
      
    })

  }
  ngOnInit(): void {
    
    }

aperturarcajachica(){

//armamos el objeto
const rcajachica: aperturacajachicaInter = {
  montoinicial: this.formulario.value.montoinicial,
  transacciones:this.formulario.value.transacciones,
  fechai:this.formulario.value.fechai,
  aprobaciones:this.formulario.value.aprobaciones,
  comentario:this.formulario.value.comentario,
  
}
console.log
// Enviamos objeto al backend

this._rcajachicaService.addcajachica(rcajachica).subscribe(_data => {
  this.mensajeExito('registrado');
  this.router.navigate(['/contabilidad']);
})
    
}
mensajeExito(texto: string) {
  this._snackBar.open(`La apertura fue realizado ${texto} con exito`,'', {
    duration: 2000,
    horizontalPosition: 'right',
  });
}

}


