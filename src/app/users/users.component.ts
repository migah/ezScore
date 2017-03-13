import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {UserService} from "./user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'ez-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>;
  edit: boolean;
  newUser: boolean;
  userNew: User;

  constructor(private userService : UserService) {
    this.users = userService.getUsers();
    this.edit = false;
    this.newUser = false;
    this.userNew = {$key:'', username:'', email:'', password:'', phone: null};
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
    this.newUser = !this.newUser;
  }

  addUser() {
    this.userService.addUser(this.userNew);
    this.userNew = {$key:'', username:'', email:'', password:'', phone: null};
    this.newUser = false;
  }
}
