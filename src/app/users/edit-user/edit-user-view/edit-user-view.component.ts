import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {User} from "../../user";
import {Observable} from "rxjs";
import {Role} from "../../../role/role";

@Component({
  selector: 'ez-edit-user-view',
  templateUrl: 'edit-user-view.component.html'
})
export class EditUserViewComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  roles: Observable<Role[]>;

  @Output('editUser')
  tryEditEmitter = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {

  }

  tryEdit(){
    this.tryEditEmitter.emit(this.user);
  }
}
