import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new User("","","","","")
  private userSource = new BehaviorSubject<User>(this.user)
  currentUser = this.userSource.asObservable();

  constructor() { }

  updateUser(user:User){
    this.userSource.next(user)
  }
}
