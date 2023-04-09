import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UloginComponent } from './Components/ulogin/ulogin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MailVComponent } from './Components/mail-v/mail-v.component';
import { RecuperarComponent } from './Components/recuperar/recuperar.component';
import { FarmaciaComponent } from './Components/farmacia/farmacia.component';
import { PcirugiaComponent } from './Components/pcirugia/pcirugia.component';
import { RfarmaciaComponent } from './Components/rfarmacia/rfarmacia.component';
import { R2tComponent } from './Components/r2t/r2t.component';
import { VercirugiaComponent } from './Components/vercirugia/vercirugia.component';
import { ListacirugiaComponent } from './Components/listacirugia/listacirugia.component';
import { MedicamentoEsencialComponent } from './Components/medicamento-esencial/medicamento-esencial.component';
import { ListaEsencialComponent } from './Components/lista-esencial/lista-esencial.component';
import { ListaFarmaciaComponent } from './Components/lista-farmacia/lista-farmacia.component';
import { DboardfarComponent } from './Components/dboardfar/dboardfar.component';
import { InternacionComponent } from './Components/internacion/internacion.component';
import { RpacienteComponent } from './Components/Pacientes/rpaciente/rpaciente.component';
import { LpacienteComponent } from './Components/Pacientes/lpaciente/lpaciente.component';
import { VerpacienteComponent } from './Components/Pacientes/verpaciente/verpaciente.component';


const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'principal', component:DashboardComponent},
  {path: 'login', component:UloginComponent},
  {path: 'verificarm', component:MailVComponent},
  {path: 'recuperar', component:RecuperarComponent},
  {path: 'farmacia', component:FarmaciaComponent},
  {path: 'programacion', component:PcirugiaComponent},
  {path: 'registrarf', component:RfarmaciaComponent},
  {path: 'prueba', component:R2tComponent},
  {path: 'vercirugia', component:VercirugiaComponent},
  {path: 'listacirugia', component:ListacirugiaComponent},
  {path: 'medsencial', component:MedicamentoEsencialComponent},
  {path: 'listesencial', component:ListaEsencialComponent},
  {path: 'listafarmacia', component:ListaFarmaciaComponent},
  {path: 'form3', component:DboardfarComponent},
  {path: 'internacion', component:InternacionComponent},
  {path: 'rpaciente', component:RpacienteComponent},
  {path: 'lpaciente', component:LpacienteComponent},
  {path: 'verpaciente/:id',component:VerpacienteComponent},
  {path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
