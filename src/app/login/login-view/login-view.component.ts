import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AuthUser} from "../auth-user";

@Component({
  selector: 'ez-login-view',
  templateUrl: './login-view.component.html'
})
export class LoginViewComponent implements OnInit {
  user: AuthUser;

  @Input()
  tryingToLogIn: boolean;

  @Input()
  signInError: string;

  @Output('login')
  tryLoginEmitter = new EventEmitter<AuthUser>();

  @Output('register')
  tryRegisterEmitter = new EventEmitter<AuthUser>();

  constructor() { }

  ngOnInit() {
    this.user = new AuthUser();
  }

  tryLogin() {
    this.tryLoginEmitter.emit(this.user);
  }

  tryRegister() {
    this.tryRegisterEmitter.emit(this.user);
  }
}
