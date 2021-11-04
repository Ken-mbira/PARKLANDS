import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';
import { Reservation } from '../reservation';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reservation-status',
  templateUrl: './reservation-status.component.html',
  styleUrls: ['./reservation-status.component.css']
})
export class ReservationStatusComponent implements OnInit {

  reservations : Reservation[] = []
  cloudinaryUrl = environment.CLOUDINARY_URL

  constructor(private accountService:AccountService) { }

  completeReservation(pk:any){

  }

  ngOnInit(): void {
    this.accountService.myReservations().subscribe(response=>{
      let holder:any = response['success']
      for (let index = 0; index < holder.length; index++) {
        let newReservation = new Reservation(holder[index]['start_time'],holder[index]['end_time'],holder[index]['car_plate'],holder[index]['car_plate_number'],holder[index]['car_brand'],holder[index]['driver']['id'],holder[index]['parking'])
        this.reservations.push(newReservation)
      }
    })
  }

}
