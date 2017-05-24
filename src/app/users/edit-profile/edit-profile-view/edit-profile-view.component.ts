import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Profile} from "../../profile";
import {User} from "../../user";

@Component({
  selector: 'ez-edit-profile-view',
  templateUrl: './edit-profile-view.component.html',
  styleUrls: ['./edit-profile-view.component.css']
})
export class EditProfileViewComponent implements OnInit {

  @Input()
  user: User;

  @Output("editProfile")
  editEmitter = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  tryEdit() {
    this.editEmitter.emit(this.user);
  }
}
