import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUIComponent } from './Components/login-ui/login-ui.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

//modulos

import { AngularFireModule  } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UloginComponent } from './Components/ulogin/ulogin.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';




import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MailVComponent } from './Components/mail-v/mail-v.component';
import { RecuperarComponent } from './Components/recuperar/recuperar.component';
import { CabeceraComponent } from './Components/cabecera/cabecera.component';
import { FarmaciaComponent } from './Components/farmacia/farmacia.component';
import { NavbarfarmaciaComponent } from './Components/navbarfarmacia/navbarfarmacia.component';
import { TwitterComponent } from './Components/twitter/twitter.component';
import { PcirugiaComponent } from './Components/pcirugia/pcirugia.component';
import { RfarmaciaComponent } from './Components/rfarmacia/rfarmacia.component';
import { R2tComponent } from './Components/r2t/r2t.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarcirugiaComponent } from './Components/navbarcirugia/navbarcirugia.component';
import { VercirugiaComponent } from './Components/vercirugia/vercirugia.component';
import { ListacirugiaComponent } from './Components/listacirugia/listacirugia.component';
import { MedicamentoEsencialComponent } from './Components/medicamento-esencial/medicamento-esencial.component';
import { ListaEsencialComponent } from './Components/lista-esencial/lista-esencial.component';
import { ListaFarmaciaComponent } from './Components/lista-farmacia/lista-farmacia.component';
import { DboardfarComponent } from './Components/dboardfar/dboardfar.component';
import { NavbarmenuComponent } from './Components/navbarmenu/navbarmenu.component';
import { InternacionComponent } from './Components/internacion/internacion.component';
import { NavbarinterComponent } from './Components/navbarinter/navbarinter.component';
import { RpacienteComponent } from './Components/Pacientes/rpaciente/rpaciente.component';
import { LpacienteComponent } from './Components/Pacientes/lpaciente/lpaciente.component';
import { EdipacienteComponent } from './Components/Pacientes/edipaciente/edipaciente.component';
import { VerpacienteComponent } from './Components/Pacientes/verpaciente/verpaciente.component';
import { MonitorpComponent } from './Components/Pacientes/monitorp/monitorp.component';
import { PrecetaComponent } from './Components/Pacientes/preceta/preceta.component';
import { ListrecetaComponent } from './Components/Pacientes/listreceta/listreceta.component';
import { Prueba1Component } from './Components/Pruebas/prueba1/prueba1.component';
import { Prueba2Component } from './Components/Pruebas/prueba2/prueba2.component';
import { Prueba3Component } from './Components/Pruebas/prueba3/prueba3.component';
import { Prueba4Component } from './Components/Pruebas/prueba4/prueba4.component';
import { PrincipalcComponent } from './Components/Contabilidad/principalc/principalc.component';
import { EstadosfinancierosComponent } from './Components/Contabilidad/estadosfinancieros/estadosfinancieros.component';
import { NavbarcontabilidadComponent } from './Components/Contabilidad/navbarcontabilidad/navbarcontabilidad.component';
import { CajachicaaperturaComponent } from './Components/Contabilidad/cajachicaapertura/cajachicaapertura.component';
import { CajachicacierreComponent } from './Components/Contabilidad/cajachicacierre/cajachicacierre.component';
import { EstadocajachicaComponent } from './Components/Contabilidad/estadocajachica/estadocajachica.component';
import { EgrcajachicaComponent } from './Components/Contabilidad/egrcajachica/egrcajachica.component';
import { TcajachicaComponent } from './Components/Contabilidad/tcajachica/tcajachica.component';
import { CajamodalComponent } from './Components/Contabilidad/cajachicacierre/cajamodal/cajamodal.component';
import { PlandecuentasComponent } from './Components/Contabilidad/Cont/plandecuentas/plandecuentas.component';
import { CTRANSACCIONESComponent } from './Components/Contabilidad/Cont/ctransacciones/ctransacciones.component';
import { LibroscontablesComponent } from './Components/Contabilidad/Cont/libroscontables/libroscontables.component';
import { RepFinancieroCComponent } from './Components/Contabilidad/Cont/rep-financiero-c/rep-financiero-c.component';
import { ImpuestosComponent } from './Components/Contabilidad/Cont/impuestos/impuestos.component';
import { RegCuentaComponent } from './Components/Contabilidad/Cont/reg-cuenta/reg-cuenta.component';
import { GuiacontabiliadComponent } from './Components/Contabilidad/Cont/guiacontabiliad/guiacontabiliad.component';
import { ActivoComponent } from './Components/Contabilidad/Cont/plandecuentas/activo/activo.component';
import { PasivoComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/pasivo.component';
import { PatrimonioComponent } from './Components/Contabilidad/Cont/plandecuentas/patrimonio/patrimonio.component';
import { IngresosComponent } from './Components/Contabilidad/Cont/plandecuentas/ingresos/ingresos.component';
import { GastosComponent } from './Components/Contabilidad/Cont/plandecuentas/gastos/gastos.component';
import { NavbarcontComponent } from './Components/Contabilidad/Cont/navbarcont/navbarcont.component';
import { CcoperacionComponent } from './Components/Contabilidad/Cont/plandecuentas/ccoperacion/ccoperacion.component';
import { GuiaplancuentasComponent } from './Components/Contabilidad/Cont/guiacontabiliad/guiaplancuentas/guiaplancuentas.component';
import { GuiaactivoComponent } from './Components/Contabilidad/Cont/guiacontabiliad/guiaactivo/guiaactivo.component';
import { VeractivoComponent } from './Components/Contabilidad/Cont/plandecuentas/activo/veractivo/veractivo.component';
import { NivelactivoComponent } from './Components/Contabilidad/Cont/plandecuentas/activo/nivelactivo/nivelactivo.component';
import { N2Component } from './Components/Contabilidad/Cont/plandecuentas/activo/nivelactivo/n2/n2.component';
import { N3Component } from './Components/Contabilidad/Cont/plandecuentas/activo/nivelactivo/n3/n3.component';
import { N4Component } from './Components/Contabilidad/Cont/plandecuentas/activo/nivelactivo/n4/n4.component';
import { N5Component } from './Components/Contabilidad/Cont/plandecuentas/activo/nivelactivo/n5/n5.component';
import { N6Component } from './Components/Contabilidad/Cont/plandecuentas/activo/nivelactivo/n6/n6.component';
import { NavbarpasivoComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/navbarpasivo/navbarpasivo.component';
import { N2pComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/n2p/n2p.component';
import { N3pComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/n3p/n3p.component';
import { N4pComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/n4p/n4p.component';
import { N5pComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/n5p/n5p.component';
import { N6pComponent } from './Components/Contabilidad/Cont/plandecuentas/pasivo/n6p/n6p.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginUIComponent,
    UloginComponent,
    DashboardComponent,
    MailVComponent,
    RecuperarComponent,
    CabeceraComponent,
    FarmaciaComponent,
    NavbarfarmaciaComponent,
    TwitterComponent,
    PcirugiaComponent,
    RfarmaciaComponent,
    R2tComponent,
    NavbarcirugiaComponent,
    VercirugiaComponent,
    ListacirugiaComponent,
    MedicamentoEsencialComponent,
    ListaEsencialComponent,
    ListaFarmaciaComponent,
    DboardfarComponent,
    NavbarmenuComponent,
    InternacionComponent,
    NavbarinterComponent,
    RpacienteComponent,
    LpacienteComponent,
    EdipacienteComponent,
    VerpacienteComponent,
    MonitorpComponent,
    PrecetaComponent,
    ListrecetaComponent,
    Prueba1Component,
    Prueba2Component,
    Prueba3Component,
    Prueba4Component,
    PrincipalcComponent,
    EstadosfinancierosComponent,
    NavbarcontabilidadComponent,
    CajachicaaperturaComponent,
    CajachicacierreComponent,
    EstadocajachicaComponent,
    EgrcajachicaComponent,
    TcajachicaComponent,
    CajamodalComponent,
    PlandecuentasComponent,
    CTRANSACCIONESComponent,
    LibroscontablesComponent,
    RepFinancieroCComponent,
    ImpuestosComponent,
    RegCuentaComponent,
    GuiacontabiliadComponent,
    ActivoComponent,
    PasivoComponent,
    PatrimonioComponent,
    IngresosComponent,
    GastosComponent,
    NavbarcontComponent,
    CcoperacionComponent,
    GuiaplancuentasComponent,
    GuiaactivoComponent,
    VeractivoComponent,
    NivelactivoComponent,
    N2Component,
    N3Component,
    N4Component,
    N5Component,
    N6Component,
    NavbarpasivoComponent,
    N2pComponent,
    N3pComponent,
    N4pComponent,
    N5pComponent,
    N6pComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTabsModule,
    NgbModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDatepickerModule
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
