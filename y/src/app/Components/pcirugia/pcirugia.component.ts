import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { CirugiaservService } from 'src/app/services/cirugiaserv.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { cirugiaInter } from 'src/app/Interfaz/cirugia';

import {
	NgbCalendar,
	NgbDate,
	NgbDatepickerModule,
	NgbDateStruct,
	NgbInputDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pcirugia',
  templateUrl: './pcirugia.component.html',
  styleUrls: ['./pcirugia.component.css'],
  providers: [NgbInputDatepickerConfig],
})
export class PcirugiaComponent {
  formulario:FormGroup;
  
  model: NgbDateStruct = { day: 4, month: 4, year: 2023 };
  
  constructor(config: NgbInputDatepickerConfig, calendar: NgbCalendar,private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rcirugiaService:CirugiaservService,
    private aRoute: ActivatedRoute,
    private router: Router,) {
		// customize default values of datepickers used by this component tree
		config.minDate = { year: 1900, month: 1, day: 1 };
		config.maxDate = { year: 2099, month: 12, day: 31 };

		// days that don't belong to current month are not visible
		config.outsideDays = 'hidden';

			// setting datepicker popup to close only on click outside
		config.autoClose = 'outside';

		// setting datepicker popup to open above the input
		config.placement = ['top-start', 'top-end'];

    //construimos el formulario

    this.formulario = this.fb.group({
      paciente: ['',Validators.required],
      grado: ['',Validators.required],
      unidad: ['',Validators.required],
      tipointer: ['',Validators.required],
      fechap: ['',Validators.required],
      fecham: ['',Validators.required],
      fechaa: ['',Validators.required],
      tiposangre: ['',Validators.required],
      observaciones: ['',Validators.required],
     
      
    })


  
}
ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  agregarcirugia(){

   //armamos el objeto
    const rcirugia: cirugiaInter = {
      paciente: this.formulario.value.paciente,
      grado:this.formulario.value.grado,
      unidad:this.formulario.value.unidad,
      tipointer:this.formulario.value.tipointer,
      fechap:this.formulario.value.fechap,
      fecham:this.formulario.value.fecham,
      fechaa:this.formulario.value.fechaa,
      tiposangre:this.formulario.value.tiposangre,
      observaciones:this.formulario.value.observaciones,
    
    }
    console.log(rcirugia)
    // Enviamos objeto al backend

    this._rcirugiaService.addprogramacioncirugia(rcirugia).subscribe(_data => {
      this.mensajeExito('registrado');
      this.formulario.reset();
      this.router.navigate(['/programacion']);
    })

         
  }
  mensajeExito(texto: string) {
    this._snackBar.open(`El Registro fue realizado ${texto} con exito`,'', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }


    
}

