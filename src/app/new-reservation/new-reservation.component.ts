import { Component, OnInit } from '@angular/core';

import { Parking } from '../parking';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {
  
  chosenlocation:any;
  chosenParking:any;
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
      console.log(this.parkings)
    })
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
