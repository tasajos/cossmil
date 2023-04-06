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
import {MatExpansionModule} from '@angular/material/expansion'



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
    R2tComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
