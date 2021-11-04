import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';
import { Parking } from '../parking';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lot-status',
  templateUrl: './lot-status.component.html',
  styleUrls: ['./lot-status.component.css']
})
export class LotStatusComponent implements OnInit {

  parkings: Parking[] = []
  holder:any;
  cloudinaryUrl = environment.CLOUDINARY_URL

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.myParking().subscribe(response=>{
      this.holder = response['success']
      for (let index = 0; index < this.holder.length; index++) {
        let parking = new Parking(this.holder[index]['name'],this.holder[index]['rows'],this.holder[index]['columns'],this.holder[index]['location']['name'],this.holder[index]['image'],this.holder[index]['min_price'],this.holder[index]['rate'],this.holder[index]['drivers'],this.holder[index]['id'])
        this.parkings.push(parking)
      }

    })
  }

}
