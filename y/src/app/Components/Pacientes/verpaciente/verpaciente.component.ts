import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inter } from 'src/app/Interfaz/inter';
import { PacInt } from 'src/app/Interfaz/pac-int';
import { ServService } from 'src/app/services/serv.service';
import { PacientinService } from 'src/app/services/pacientin.service';

@Component({
  selector: 'app-verpaciente',
  templateUrl: './verpaciente.component.html',
  styleUrls: ['./verpaciente.component.css']
})
export class VerpacienteComponent implements OnInit{

  id:number;
  idpaciente! : PacInt;
  loading:boolean = false;
  
    constructor (private _verpacienteservice:PacientinService,
      private aRoute: ActivatedRoute) {
  
        this.id = +this.aRoute.snapshot.paramMap.get('id')!;
        
       }
  
  
    ngOnInit(): void {
      this.obtenerpersonal();
    }
  obtenerpersonal(){
  this._verpacienteservice.getidpaciente(this.id).subscribe(data => this.idpaciente =data);
  
  }
  
  }
  