import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ContabiliadService} from 'src/app/services/contabiliad.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reg-cuenta',
  templateUrl: './reg-cuenta.component.html',
  styleUrls: ['./reg-cuenta.component.css']
})
export class RegCuentaComponent implements OnInit {


  formulario:FormGroup;

  constructor (private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rcontabilidadchicaService:ContabiliadService,
    private aRoute: ActivatedRoute,
    private router: Router,private http: HttpClient) {

    this.formulario = this.fb.group({
      montoinicial: ['',Validators.required],
      transacciones: ['',Validators.required],
      fechai: [this.getFormattedDate(), Validators.required], // Autocompletar con la fecha actual
      aprobaciones: ['',Validators.required],
      comentario: ['',Validators.required],
      
      
          
      
    })

  }

  registrarcuenta(){

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

}
