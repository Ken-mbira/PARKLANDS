import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';
import { Parking } from '../parking';

@Component({
  selector: 'app-new-lot',
  templateUrl: './new-lot.component.html',
  styleUrls: ['./new-lot.component.css']
})
export class NewLotComponent implements OnInit {
  parking = new Parking("","","","","","","")
  locations: any;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getLocations().subscribe(response=>{
      this.locations = response
    },error=>{
      console.log(error)
    })
  }

}
