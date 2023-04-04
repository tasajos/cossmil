import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UloginComponent } from './Components/ulogin/ulogin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MailVComponent } from './Components/mail-v/mail-v.component';


const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'principal', component:DashboardComponent},
    {path: 'login', component:UloginComponent},
  {path: 'verificarm', component:MailVComponent},
  //{path: 'visual', component:VisualComponent},
   {path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
