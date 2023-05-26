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
import { EdipacienteComponent } from './Components/Pacientes/edipaciente/edipaciente.component';
import { MonitorpComponent } from './Components/Pacientes/monitorp/monitorp.component';
import { PrecetaComponent } from './Components/Pacientes/preceta/preceta.component';
import { ListrecetaComponent } from './Components/Pacientes/listreceta/listreceta.component';
import { Prueba1Component } from './Components/Pruebas/prueba1/prueba1.component';
import { Prueba4Component } from './Components/Pruebas/prueba4/prueba4.component';
import { PrincipalcComponent } from './Components/Contabilidad/principalc/principalc.component';
import { CajachicaaperturaComponent } from './Components/Contabilidad/cajachicaapertura/cajachicaapertura.component';
import { CajachicacierreComponent } from './Components/Contabilidad/cajachicacierre/cajachicacierre.component';
import { EstadocajachicaComponent } from './Components/Contabilidad/estadocajachica/estadocajachica.component';
import { EgrcajachicaComponent } from './Components/Contabilidad/egrcajachica/egrcajachica.component';
import { CajamodalComponent } from './Components/Contabilidad/cajachicacierre/cajamodal/cajamodal.component';
import { CTRANSACCIONESComponent } from './Components/Contabilidad/Cont/ctransacciones/ctransacciones.component';
import { ImpuestosComponent } from './Components/Contabilidad/Cont/impuestos/impuestos.component';
import { LibroscontablesComponent } from './Components/Contabilidad/Cont/libroscontables/libroscontables.component';
import { PlandecuentasComponent } from './Components/Contabilidad/Cont/plandecuentas/plandecuentas.component';
import { RepFinancieroCComponent } from './Components/Contabilidad/Cont/rep-financiero-c/rep-financiero-c.component';
import { RegCuentaComponent } from './Components/Contabilidad/Cont/reg-cuenta/reg-cuenta.component';
import { GuiacontabiliadComponent } from './Components/Contabilidad/Cont/guiacontabiliad/guiacontabiliad.component';


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
  {path: 'editarpaciente/:id',component:EdipacienteComponent},
  {path: 'monitorp',component:MonitorpComponent},
  {path: 'preceta',component:PrecetaComponent},
  {path: 'listreceta',component:ListrecetaComponent},
  {path: 'prueba1',component:Prueba1Component},
  {path: 'prueba4',component:Prueba4Component},
  {path: 'contabilidad',component:PrincipalcComponent},
  {path: 'acajachica',component:CajachicaaperturaComponent},
  {path: 'ccajachica',component:CajachicacierreComponent},
  {path: 'estadocajachica',component:EstadocajachicaComponent},
  {path: 'egcajachica',component:EgrcajachicaComponent},
  {path: 'modalcierre',component:CajamodalComponent},
  {path: 'ctransacciones',component:CTRANSACCIONESComponent},
  {path: 'cimpuestos',component:ImpuestosComponent},
  {path: 'libroscontables',component:LibroscontablesComponent},
  {path: 'plandecuentas',component:PlandecuentasComponent},
  {path: 'crepfinanciero',component:RepFinancieroCComponent},
  {path: 'regcuentas',component:RegCuentaComponent},
  {path: 'guiacontabilidad',component:GuiacontabiliadComponent},




  {path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
