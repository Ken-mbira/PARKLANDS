import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { User } from '../user';
import { UserService } from '../user.service';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  cloudinaryUrl = environment.CLOUDINARY_URL
  user = new User("","","","","")


  constructor(private userService:UserService,private accountService:AccountService,private route:Router) { }

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
