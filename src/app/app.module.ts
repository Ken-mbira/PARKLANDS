import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DriverStatusComponent } from './driver-status/driver-status.component';
import { LotStatusComponent } from './lot-status/lot-status.component';
import { ReservationStatusComponent } from './reservation-status/reservation-status.component';
import { LandingComponent } from './landing/landing.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { NewLotComponent } from './new-lot/new-lot.component';
import { RegisterChoiceComponent } from './register-choice/register-choice.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DriverStatusComponent,
    LotStatusComponent,
    ReservationStatusComponent,
    LandingComponent,
    NewReservationComponent,
    NewLotComponent,
    RegisterChoiceComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
