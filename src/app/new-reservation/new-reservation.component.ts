import { Component, OnInit } from '@angular/core';

import { Parking } from '../parking';
import { AccountService } from '../account.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {
  
  reservation = new Reservation("","","","","","","")
  chosenlocation:any;
  chosenParking:any;
  driverOptions:any;
  locations:any;
  parkings: Parking[] = []
  holder:any;

  getOptions(pk:any){
    this.accountService.getParkingOptions(pk).subscribe(response=>{
      this.holder = response['success']
      for (let index = 0; index < this.holder.length; index++) {
        let parking = new Parking(this.holder[index]['name'],this.holder[index]['rows'],this.holder[index]['columns'],this.holder[index]['location']['name'],this.holder[index]['image'],this.holder[index]['min_price'],this.holder[index]['rate'],this.holder[index]['drivers'],this.holder[index]['id'])
        this.parkings.push(parking)
      }
    })
  }

  getDriverOptions(pk:any){
    this.accountService.getDriverOptions(pk).subscribe(response => {
      this.driverOptions = response['success']
    })
  }

  makeReservation(){
    let form = new FormData();
    form.append('start_time',this.reservation.start_time)
    form.append('end_time',this.reservation.end_time)
    form.append('car_plate',this.reservation.car_plate)
    form.append('car_plate_number',this.reservation.car_plate_number)
    form.append('car_brand',this.reservation.car_brand)
    form.append('driver',this.reservation.driver)
    form.append('parking',this.reservation.parking)

    this.accountService.makeReservation(form)
  }

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getLocations().subscribe(response=>{
      this.locations = response
    },error=>{
      console.log(error)
    })
  }

}
