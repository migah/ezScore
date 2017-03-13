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

  constructor(private userService : UserService) {
    this.users = userService.getUsers();
  }

  ngOnInit() {
  }



}
