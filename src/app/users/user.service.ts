import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {User} from "./user";
import {isUndefined} from "util";

@Injectable()
export class UserService {


  constructor(private af: AngularFire) { }

  addUser(user: User) {
    this.af.database.list('users').push({
      username: user.username,
      email: user.email,
      password: user.password,
      phone: user.phone,
      role: user.role
    });
  }

  getUsers() : Observable<User[]>{
    return this.af.database.list('users');
  }

  getUser($key : string) : Observable<User>{
    return this.af.database.object('users/' +$key);
  }

  deleteUser($key : string) {
    if ($key => !isUndefined) {
      this.af.database.object('users/' + $key).remove();
    }
  }

  editUser($key: string) {
    var editedUser = this.af.database.object('users/' + $key);
  }
}
