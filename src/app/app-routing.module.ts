import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { DriverStatusComponent } from './driver-status/driver-status.component';
import { LotStatusComponent } from './lot-status/lot-status.component';
import { NewLotComponent } from './new-lot/new-lot.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RegisterChoiceComponent } from './register-choice/register-choice.component';
import { ReservationStatusComponent } from './reservation-status/reservation-status.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'registerChoice',
    component:RegisterChoiceComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'landing',
    component:LandingComponent
  },
  {
    path:'driver_status',
    component:DriverStatusComponent
  },
  {
    path:'lot_status',
    component:LotStatusComponent
  },
  {
    path:'new_lot',
    component:NewLotComponent
  },
  {
    path:'new_reservation',
    component:NewReservationComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'register_choice',
    component:RegisterChoiceComponent
  },
  {
    path:'reservation_status',
    component:ReservationStatusComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
