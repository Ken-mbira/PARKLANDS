import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user = new User("","","","","");

  constructor(private userService:UserService,private accountService:AccountService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.user = user)

    this.accountService.getUser().subscribe(user => {
      let holder:any = user
      this.user.username = holder['user']['username']
      this.user.email = holder['user']['email']
      this.user.group = holder['user']['groups']
      this.user.profile_pic = holder['user']['profile_pic']
      console.log(this.user)
    })

    this.userService.updateUser(this.user)
  }

}
