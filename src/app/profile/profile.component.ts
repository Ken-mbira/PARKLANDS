import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  cloudinaryUrl = environment.CLOUDINARY_URL
  user = new User("","","","","")


  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.user = user)
    console.log(this.user)
  }

}
