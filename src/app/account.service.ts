import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http:HttpClient,private _snackBar:MatSnackBar,private route:Router) { }
}
