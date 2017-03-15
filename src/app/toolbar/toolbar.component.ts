import { Component, OnInit } from '@angular/core';
import {AuthService} from "../login/auth.service";
import {AuthUser} from "../login/auth-user";
import {FirebaseAuthState} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'ez-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user: FirebaseAuthState;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.currentUser().subscribe(user => {
      this.user = user;
    })
  }

  logout() {
    this.authService.logout().subscribe(() => this.router.navigate(['']))
  }

  isAdmin() : boolean {
    //TODO
    return true;
  }
}
