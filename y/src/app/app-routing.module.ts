import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecuperarpasswordComponent } from './components/recuperarpassword/recuperarpassword.component';
import { LoginUIComponent } from './Components/login-ui/login-ui.component';
import { VerificarmailComponent } from './components/verificarmail/verificarmail.component';

const routes: Routes = [
  {path: '', redirectTo:'dashboard',pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'recuperarp', component:RecuperarpasswordComponent},
  {path: 'login', component:LoginUIComponent},
  {path: 'verificarm', component:VerificarmailComponent},
  //{path: 'visual', component:VisualComponent},
   {path: '**', redirectTo: 'dashboard', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
