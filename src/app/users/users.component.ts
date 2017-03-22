import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {Role} from "../role/role";
import {RoleService} from "../role/role.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ez-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>;
  roles: Role[];
  newUser: boolean;
  userNew: User;
  password: string;

  constructor(private userService : UserService, private roleService: RoleService, private router: Router) {
    this.users = userService.getUsers();
    roleService.getRoles().subscribe(roles => this.roles = roles);
    this.newUser = false;
    this.userNew = new User();
  }

  ngOnInit() {
  }

  editUser(user: User) {
    this.router.navigate(['/users/edit/' + user.$key]);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.$key);
  }

  switchNewUser() {
    this.userNew = new User();
    this.newUser = !this.newUser;
  }

  addUser() {
    this.userService.addUser(this.userNew, this.password);
    this.userNew = new User();
    this.newUser = false;
  }
}
