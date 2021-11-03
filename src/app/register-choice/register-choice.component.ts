import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register-choice',
  templateUrl: './register-choice.component.html',
  styleUrls: ['./register-choice.component.css']
})
export class RegisterChoiceComponent implements OnInit {

  user = new User("","","","","")

  newGroup(group:string){
    this.user.group = group
    this.userService.updateUser(this.user)
    this.route.navigate(['register'])
  }

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
  this.userService.currentUser.subscribe(user => this.user = user)
  }

}
