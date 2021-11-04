import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';
import { Parking } from '../parking';

@Component({
  selector: 'app-new-lot',
  templateUrl: './new-lot.component.html',
  styleUrls: ['./new-lot.component.css']
})
export class NewLotComponent implements OnInit {
  parking = new Parking("","","","","","","","","")
  locations: any;

  onImageChange(event:any){
    this.parking.image = event.target.files[0];
  }

  registerParking(){
    let form = new FormData()
    form.append('location',this.parking.location)
    form.append('min_price',this.parking.min_price)
    form.append('name',this.parking.name)
    form.append('image',this.parking.image,this.parking.image.name)
    form.append('rate',this.parking.rate)
    form.append('rows',this.parking.rows)
    form.append('columns',this.parking.columns)

    this.accountService.registerLocation(form)
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
