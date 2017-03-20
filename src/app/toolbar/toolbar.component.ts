import { Component, OnInit } from '@angular/core';
import {AuthService} from "../login/auth.service";
import {AuthUser} from "../login/auth-user";
import {FirebaseAuthState} from "angularfire2";
import {Router} from "@angular/router";
import {RoleService} from "../role/role.service";
import {isUndefined} from "util";

@Component({
  selector: 'ez-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user: FirebaseAuthState;
  isAdmin: boolean;

  constructor(private authService: AuthService, private router: Router, private roleService: RoleService) {

  }

  ngOnInit() {
    this.isAdmin = false;
    this.authService.currentUser().subscribe(user => {
      this.user = user;
      if (user) {
        this.roleService.isAdmin(user.uid).subscribe(value => {
          this.isAdmin = value;
        });
      }
    });
  }

  logout() {
    this.authService.logout().subscribe(() => this.router.navigate(['']))
  }
}
