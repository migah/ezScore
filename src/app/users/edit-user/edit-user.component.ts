import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";
import {RoleService} from "../../role/role.service";
import {Role} from "../../role/role";
import {Observable} from "rxjs";
import {AuthService} from "../../login/auth.service";

@Component({
  selector: 'ez-edit-user',
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent implements OnInit {

  user : User;
  roles: Observable<Role[]>;
  isAdmin: boolean;

  constructor(private route : ActivatedRoute, private authService: AuthService, private userService : UserService, private router: Router, private roleService: RoleService) {
    this.roles = this.roleService.getRoles();
  }

  ngOnInit() {
    this.getUserToEdit();
    this.authService.isCurrentUserAdmin().subscribe((res) => {
      this.isAdmin = res;
    });
    if (!this.isAdmin) {
      this.router.navigate(['']);
    }
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
