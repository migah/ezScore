import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {User} from "./user";
import {isUndefined} from "util";
import {firebaseConfig} from "../app.module";
let firebase = require("firebase");

@Injectable()
export class UserService {

  app;
  constructor(private af: AngularFire) { }

  addUser(user: User, password: string) {
    //This hack prevents a login, when a user is created.
    if (!this.app) {
      this.app = firebase.initializeApp(firebaseConfig, "secondary");
    }
    this.app.auth().createUserWithEmailAndPassword(user.profile.email, password)
      .then(res => {
      this.af.database.object('users/' + res.uid).set({
        profile: {
          email: user.profile.email,
          username: user.profile.username,
          phone: user.profile.phone
        },
        role:{
          name: user.role.name
        }
      });
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

  editUser(user: User) {
    this.af.database.object('users/' + user.$key).update(user);
  }
}
