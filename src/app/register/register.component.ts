import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User("","","","","")
  onChangeImage(event:any){
    this.user.profile_pic = event.target.files[0]
  }
  constructor(private userService:UserService,private accountsService:AccountService) { }

  registerUser(){
    let form = new FormData()
    form.append('email',this.user.email)
    form.append('username',this.user.username)
    form.append('password',this.user.password)
    form.append('group',this.user.group)
    form.append('profile_pic',this.user.profile_pic,this.user.profile_pic.name)

    this.accountsService.register(form)
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.user = user)
  }

}
