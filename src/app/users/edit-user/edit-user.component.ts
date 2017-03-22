import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent implements OnInit {

  user : User;
  constructor(private  route : ActivatedRoute, private userService : UserService) {
    this.user = this.getUserToEdit();
  }

  ngOnInit() {
  }

  getUserToEdit() : User{
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.userService.getUser(id)
        .subscribe((user)=> {
          if (user)
            return user;
        })
    });
    return null;
  }

  editUser(userToEdit: User){
    this.userService.editUser(userToEdit);
  }
}
