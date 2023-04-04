import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUIComponent } from './Components/login-ui/login-ui.component';
import { VerificarmailComponent } from './components/verificarmail/verificarmail.component';
import { RecuperarpasswordComponent } from './components/recuperarpassword/recuperarpassword.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { PrincipalComponent } from './components/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUIComponent,
    VerificarmailComponent,
    RecuperarpasswordComponent,
    SpinnerComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
