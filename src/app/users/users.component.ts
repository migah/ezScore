import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {Role} from "../role/role";
import {RoleService} from "../role/role.service";

@Component({
  selector: 'ez-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>;
  roles: Role[];
  edit: boolean;
  newUser: boolean;
  userNew: User;

  constructor(private userService : UserService, private roleService: RoleService) {
    this.users = userService.getUsers();
    roleService.getRoles().subscribe(roles => this.roles = roles);
    this.edit = false;
    this.newUser = false;
    this.userNew = new User();
  }

  ngOnInit() {
  }

  editUser() {
    this.edit = !this.edit;
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.$key);
  }

  switchNewUser() {
    this.userNew = new User();
    this.newUser = !this.newUser;
  }

  addUser() {
    this.userService.addUser(this.userNew);
    this.userNew = new User();
    this.newUser = false;
  }
}
