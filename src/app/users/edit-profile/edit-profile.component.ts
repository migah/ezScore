import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../login/auth.service";
import {UserService} from "../user.service";
import {User} from "../user";
import {MdSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'ez-edit-profile',
  templateUrl: './edit-profile.component.html'
})
export class EditProfileComponent implements OnInit {

  user: User;

  constructor(private router: Router, private authService: AuthService, private userService: UserService, private snackBar: MdSnackBar) { }

  ngOnInit() {
    this.authService.currentUser().subscribe(res => {
      this.userService.getUser(res.uid).subscribe(user => {
        this.user = user;
      }).unsubscribe()
    }).unsubscribe()
  }

  editProfile(userToEdit: User) {
    this.authService.editEmail(userToEdit.profile.email).subscribe(
      () => {
        this.userService.editUser(userToEdit);
        this.snackBar.open("Profile is updated.", "OK", {
          duration: 3000
        });
        this.router.navigate(['']);
      },
      (err) => {
        this.snackBar.open(err, "LOL", {
          duration: 3000
        });
      },
      () => {
      }
    );
  }
}
