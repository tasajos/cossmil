import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecuperarpasswordComponent } from './components/recuperarpassword/recuperarpassword.component';
import { LoginUIComponent } from './Components/login-ui/login-ui.component';
import { VerificarmailComponent } from './components/verificarmail/verificarmail.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {path: '', redirectTo:'principal',pathMatch:'full'},
  {path: 'principal', component:PrincipalComponent},
  {path: 'recuperarp', component:RecuperarpasswordComponent},
  {path: 'login', component:LoginUIComponent},
  {path: 'verificarm', component:VerificarmailComponent},
  //{path: 'visual', component:VisualComponent},
   {path: '**', redirectTo: 'principal', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
