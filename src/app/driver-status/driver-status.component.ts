import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-driver-status',
  templateUrl: './driver-status.component.html',
  styleUrls: ['./driver-status.component.css']
})
export class DriverStatusComponent implements OnInit {

  user = new User("","","","","");

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getUser().subscribe(user => {
      let holder:any = user
      this.user.username = holder['user']['username']
      this.user.email = holder['user']['email']
      this.user.group = holder['user']['groups'][0]['name']
      this.user.profile_pic = holder['user']['profile_pic']
    },error => {
      console.log(error)
    })
  }

}
