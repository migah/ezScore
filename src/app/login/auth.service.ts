import { Injectable } from '@angular/core';
import {AngularFire, FirebaseAuthState} from "angularfire2";
import {Observable} from "rxjs";
import {UserService} from "../users/user.service";

@Injectable()
export class AuthService {

  constructor(private af: AngularFire, private userService: UserService) { }

  login(email, password) : Observable<FirebaseAuthState> {
    let promise = <Promise<FirebaseAuthState>> this.af.auth.login({
      email: email,
      password: password,
    });
    return Observable.fromPromise(promise);
  }

  register(email, password) : Observable<FirebaseAuthState> {
    let promise = <Promise<FirebaseAuthState>> this.af.auth.createUser({email, password})
      .then(res => {
        this.af.database.object('users/' + res.uid).set({
          profile: {
            email: email
          },
          role:{
            name: "user"
          }
        });
      });
    return Observable.fromPromise(promise);
  }

  currentUser(): Observable<FirebaseAuthState> {
    return this.af.auth;
  }

  isUserLoggedIn() : Observable<boolean> {
    return this.af.auth.switchMap(res => Observable.of(!!res));
  }

  currentUserId(): string {
    let id;
    this.currentUser().subscribe(res => {
      if (res) {
        id = res.uid;
      }
    });
    return id;
  }

  logout(): Observable<void> {
    let promise = <Promise<any>> this.af.auth.logout();
    return Observable.fromPromise(promise);
  }

  isCurrentUserAdmin() : Observable<boolean> {
    return this.userService.getUser(this.currentUserId()).switchMap((user) => Observable.of(user.role.name == 'admin'))
  }
}
