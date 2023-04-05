import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UloginComponent } from './Components/ulogin/ulogin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MailVComponent } from './Components/mail-v/mail-v.component';
import { RecuperarComponent } from './Components/recuperar/recuperar.component';
import { FarmaciaComponent } from './Components/farmacia/farmacia.component';
import { PcirugiaComponent } from './Components/pcirugia/pcirugia.component';
import { RfarmaciaComponent } from './Components/rfarmacia/rfarmacia.component';


const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'principal', component:DashboardComponent},
  {path: 'login', component:UloginComponent},
  {path: 'verificarm', component:MailVComponent},
  {path: 'recuperar', component:RecuperarComponent},
  {path: 'farmacia', component:FarmaciaComponent},
  {path: 'programacion', component:PcirugiaComponent},
  {path: 'registrarf', component:RfarmaciaComponent},
  {path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
