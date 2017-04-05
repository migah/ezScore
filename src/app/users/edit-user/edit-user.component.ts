import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'ez-edit-user',
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent implements OnInit {

  user : User;
  constructor(private  route : ActivatedRoute, private userService : UserService, private router: Router) {

  }

  ngOnInit() {
    this.getUserToEdit()
  }

  getUserToEdit(){
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.userService.getUser(id)
        .subscribe((user)=> {
          if (user)
            this.user = user;
        })
    });

  }

  editUser(userToEdit: User){
    this.userService.editUser(userToEdit);
    this.router.navigate(['users']);
  }
}
