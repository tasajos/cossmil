import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUIComponent } from './Components/login-ui/login-ui.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerificarmailComponent } from './components/verificarmail/verificarmail.component';
import { RecuperarpasswordComponent } from './components/recuperarpassword/recuperarpassword.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUIComponent,
    DashboardComponent,
    VerificarmailComponent,
    RecuperarpasswordComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
