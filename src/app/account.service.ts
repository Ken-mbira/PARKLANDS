import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  login(credentials:any) {
    this.http.post(`${environment.BASE_URL}login`,credentials).subscribe(response=>{
      let holder:any =response;
      sessionStorage.setItem("token",holder['token'])
      this._snackBar.open('Welcome back!', 'Thankyou', {
        horizontalPosition: "center",
        verticalPosition: "top",
        duration: 3000
      });
      this.route.navigate(['landing']);
    },error=>{
      this._snackBar.open("The provided credentials are wrong","try again",{duration:3000})
    })
  }

  logout(){
    sessionStorage.removeItem("token")
    this.route.navigate(['login'])
  }

  register(credentials:any){
    this.http.post(`${environment.BASE_URL}register`,credentials).subscribe(response=>{
      this._snackBar.open('Your new account was created successfully!', 'Login', {
        horizontalPosition: "center",
        verticalPosition: "top",
        duration: 3000
      });
      this.route.navigate(['login']);
    },error=>{
      this._snackBar.open('There was a problem creating your account', 'Try again', {
        horizontalPosition: "center",
        verticalPosition: "top",
        duration: 3000
      });
    })
  }

  getUser(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}user`,{'headers':headers})
  }

  constructor(private http:HttpClient,private _snackBar:MatSnackBar,private route:Router) { }
}
