import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  loginUser(){
    let form = new FormData()
    form.append('username',this.email)
    form.append('password',this.password)

    this.accountService.login(form)
  }

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

}
