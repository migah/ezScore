import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {AuthUser} from "./auth-user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: string
  tryingToLogIn: boolean
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(aUser: AuthUser) {
    this.tryingToLogIn = true;
    this.authService.login(aUser.email, aUser.password)
      .subscribe(
        (user) => {
          this.loginError = null;
          this.router.navigate(['users']);
        },
        (err) => {
          this.loginError = "Username or password is incorrect"
          this.tryingToLogIn = false;
        },
        () => {
          this.tryingToLogIn = false;
        }
      )
  }

}
