import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {AuthUser} from "./auth-user";
import {MdSnackBar} from "@angular/material";
import {UserService} from "../users/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  tryingToLogIn: boolean;
  constructor(private authService: AuthService, private router: Router, private snackBar: MdSnackBar, private userService: UserService) { }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(res => {
      if (res) {
        this.router.navigate(['']);
      }
    });
  }

  login(aUser: AuthUser) {
    this.tryingToLogIn = true;
    this.authService.login(aUser.email, aUser.password)
      .subscribe(
        (user) => {
          this.userService.getUser(user.uid).subscribe(user => {
            if (user.isDisabled) {
              this.authService.logout();
              this.snackBar.open("User is disabled", "OK", {
                duration: 3000,
              })
            } else {
              this.router.navigate([""]);
            }
          })
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
          this.snackBar.open(aUser.email + " created.", "OK", {
            duration: 3000,
          });
          this.router.navigate([""]);
        },
        (err) => {
          this.snackBar.open(err, "OK", {
            duration: 3000,
          });
        },
        () => {

        }
      )
  }

}
