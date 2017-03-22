import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {User} from "../../user";

@Component({
  selector: 'ez-edit-user-view',
  templateUrl: 'edit-user-view.component.html',
  styleUrls: ['edit-user-view.component.css']
})
export class EditUserViewComponent implements OnInit {

  @Input()
  user: User;

  @Output('editUser')
  tryEditEmitter = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  tryEdit(){
    this.tryEditEmitter.emit(this.user);
  }


}
