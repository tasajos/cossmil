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
import { ActivoComponent } from './Components/Contabilidad/Cont/plandecuentas/activo/activo.component';
import { PasivoComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/pasivo.component';
import { PatrimonioComponent } from './Components/Contabilidad/Cont/plandecuentas/patrimonio/patrimonio.component';
import { IngresosComponent } from './Components/Contabilidad/Cont/plandecuentas/ingresos/ingresos.component';
import { GastosComponent } from './Components/Contabilidad/Cont/plandecuentas/gastos/gastos.component';
import { CcoperacionComponent } from './Components/Contabilidad/Cont/plandecuentas/ccoperacion/ccoperacion.component';
import { GuiaactivoComponent } from './Components/Contabilidad/Cont/guiacontabiliad/guiaactivo/guiaactivo.component';
import { N3Component } from './Components/Contabilidad/Cont/plandecuentas/activo/nivelactivo/n3/n3.component';
import { N4Component } from './Components/Contabilidad/Cont/plandecuentas/activo/nivelactivo/n4/n4.component';
import { N5Component } from './Components/Contabilidad/Cont/plandecuentas/activo/nivelactivo/n5/n5.component';
import { N6Component } from './Components/Contabilidad/Cont/plandecuentas/activo/nivelactivo/n6/n6.component';
import { N2pComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/n2p/n2p.component';
import { N3pComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/n3p/n3p.component';
import { N4pComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/n4p/n4p.component';
import { N5pComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/n5p/n5p.component';
import { N6pComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/n6p/n6p.component';
import { N2patComponent } from './Components/Contabilidad/Cont/plandecuentas/patrimonio/n2pat/n2pat.component';
import { N3patComponent } from './Components/Contabilidad/Cont/plandecuentas/patrimonio/n3pat/n3pat.component';
import { N4patComponent } from './Components/Contabilidad/Cont/plandecuentas/patrimonio/n4pat/n4pat.component';
import { N5patComponent } from './Components/Contabilidad/Cont/plandecuentas/patrimonio/n5pat/n5pat.component';
import { N6patComponent } from './Components/Contabilidad/Cont/plandecuentas/patrimonio/n6pat/n6pat.component';
import { N2cdComponent } from './Components/Contabilidad/Cont/plandecuentas/ingresos/n2cd/n2cd.component';
import { N3cdComponent } from './Components/Contabilidad/Cont/plandecuentas/ingresos/n3cd/n3cd.component';
import { N4cdComponent } from './Components/Contabilidad/Cont/plandecuentas/ingresos/n4cd/n4cd.component';
import { N5cdComponent } from './Components/Contabilidad/Cont/plandecuentas/ingresos/n5cd/n5cd.component';
import { N6cdComponent } from './Components/Contabilidad/Cont/plandecuentas/ingresos/n6cd/n6cd.component';
import { N2pcComponent } from './Components/Contabilidad/Cont/plandecuentas/gastos/n2pc/n2pc.component';
import { N4pcComponent } from './Components/Contabilidad/Cont/plandecuentas/gastos/n4pc/n4pc.component';
import { N5pcComponent } from './Components/Contabilidad/Cont/plandecuentas/gastos/n5pc/n5pc.component';
import { N6pcComponent } from './Components/Contabilidad/Cont/plandecuentas/gastos/n6pc/n6pc.component';
import { N3pcComponent } from './Components/Contabilidad/Cont/plandecuentas/gastos/n3pc/n3pc.component';
import { N3coComponent } from './Components/Contabilidad/Cont/plandecuentas/ccoperacion/n3co/n3co.component';
import { N4coComponent } from './Components/Contabilidad/Cont/plandecuentas/ccoperacion/n4co/n4co.component';
import { N5coComponent } from './Components/Contabilidad/Cont/plandecuentas/ccoperacion/n5co/n5co.component';
import { N6coComponent } from './Components/Contabilidad/Cont/plandecuentas/ccoperacion/n6co/n6co.component';
import { DashboardGralComponent } from './Components/Contabilidad/dashboard-gral/dashboard-gral.component';





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
  {path: 'pactivo',component:ActivoComponent},
  {path: 'ppasivo',component:PasivoComponent},
  {path: 'patrimonio',component:PatrimonioComponent},
  {path: 'pingreso',component:IngresosComponent},
  {path: 'pgastos',component:GastosComponent},
  {path: 'coperacion',component:CcoperacionComponent},
  {path: 'guiactivo',component:GuiaactivoComponent},
  {path: 'pactivon3',component:N3Component},
  {path: 'pactivon4',component:N4Component},
  {path: 'pactivon5',component:N5Component},
  {path: 'pactivon6',component:N6Component},
  {path: 'ppasivo2',component:N2pComponent},
  {path: 'ppasivo3',component:N3pComponent},
  {path: 'ppasivo4',component:N4pComponent},
  {path: 'ppasivo5',component:N5pComponent},
  {path: 'ppasivo6',component:N6pComponent},
  {path: 'ppatrimonio3',component:N3patComponent},
  {path: 'ppatrimonio4',component:N4patComponent},
  {path: 'ppatrimonio5',component:N5patComponent},
  {path: 'ppatrimonio6',component:N6patComponent},
  {path: 'cdistribucion3',component:N3cdComponent},
  {path: 'cdistribucion4',component:N4cdComponent},
  {path: 'cdistribucion5',component:N5cdComponent},
  {path: 'cdistribucion6',component:N6cdComponent},
  {path: 'cproducto3',component:N3pcComponent},
  {path: 'cproducto4',component:N4pcComponent},
  {path: 'cproducto5',component:N5pcComponent},
  {path: 'cproducto6',component:N6pcComponent},
  {path: 'coperacion3',component:N3coComponent},
  {path: 'coperacion4',component:N4coComponent},
  {path: 'coperacion5',component:N5coComponent},
  {path: 'coperacion6',component:N6coComponent},
  {path: 'dboardgral',component:DashboardGralComponent},



  
  




  {path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
