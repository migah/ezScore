import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {AuthUser} from "./auth-user";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: string
  tryingToLogIn: boolean
  constructor(private authService: AuthService, private router: Router, private snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  login(aUser: AuthUser) {
    this.tryingToLogIn = true;
    this.authService.login(aUser.email, aUser.password)
      .subscribe(
        (user) => {
          this.loginError = null;
          this.router.navigate([""]);
        },
        (err) => {
          this.snackBar.open("Username or password is incorrect", "OK", {
            duration: 3000,
          });
          this.tryingToLogIn = false;
        },
        () => {
          this.tryingToLogIn = false;
        }
      )
  }

  register (aUser: AuthUser) {
    this.authService.register(aUser.email, aUser.password)
      .subscribe(
        (user) => {
          this.snackBar.open(aUser.email + " created. Please login", "OK", {
            duration: 3000,
          });
        },
        (err) => {
          this.snackBar.open("Error", "OK", {
            duration: 3000,
          });
        },
        () => {

        }
      )
  }

}
