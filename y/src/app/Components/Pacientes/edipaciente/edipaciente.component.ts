import { PacInt  } from 'src/app/Interfaz/pac-int';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientinService } from 'src/app/services/pacientin.service';


@Component({
  selector: 'app-edipaciente',
  templateUrl: './edipaciente.component.html',
  styleUrls: ['./edipaciente.component.css']
})
export class EdipacienteComponent {
  loading: boolean = false;
  id: number;
  formulario:FormGroup;
      
  constructor(private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rpacienteservice:PacientinService,
    private aRoute: ActivatedRoute,
    private router: Router,) 
    
    {
		
    //construimos el formulario

    this.formulario = this.fb.group({
      pieza: ['',Validators.required],
      nombrepaciente: ['',Validators.required],
      doctor: ['',Validators.required],
      cuidado: ['',Validators.required],
      estado: ['',Validators.required],
      fecha: ['',Validators.required],
        
      
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    }
    agregarpaciente(){

      //armamos el objeto
       const rpaciente: PacInt = {
         pieza: this.formulario.value.pieza,
         nombrepaciente:this.formulario.value.nombrepaciente,
         doctor:this.formulario.value.doctor,
         cuidado:this.formulario.value.cuidado,
         estado:this.formulario.value.estado,
         fecha:this.formulario.value.fecha,
            
       }
  
      if(this.id != 0) {
        rpaciente.id = this.id;
        this.editarPaciente(this.id, rpaciente);
      } else {
        this.agregarPacientes(rpaciente);
      }

  

  

    }
    
  editarPaciente(id: number, paciente: PacInt) {
    this.loading = true;
    this._rpacienteservice.updatepaciente(id, paciente).subscribe(() => {
      this.loading = false;
      console.log('llegue')
      this.mensajeExito('actualizada');
      this.router.navigate(['/lpaciente']);
    })
  }
    mensajeExito(texto: string) {
      this._snackBar.open(`El paciente fue editado ${texto} con exito`,'', {
        duration: 4000,
        horizontalPosition: 'right',
      });
    }
      agregarPacientes(rpaciente: PacInt) {
        this._rpacienteservice.addpaciente(rpaciente).subscribe(data => {
          this.mensajeExito('registrada');
          this.router.navigate(['/lpaciente']);
        })
    }

}
