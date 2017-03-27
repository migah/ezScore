import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {UserService} from "./users/user.service";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginViewComponent } from './login/login-view/login-view.component';
import {AuthService} from "./login/auth.service";
import {RoleService} from "./role/role.service";
import { EditUserViewComponent } from './users/edit-user/edit-user-view/edit-user-view.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

export const firebaseLoginConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

export const firebaseConfig = {
  apiKey: "AIzaSyAuc5rwwKnV6v-15no519R0XdR1ImSx2HU",
  authDomain: "ezscore-dcd70.firebaseapp.com",
  databaseURL: "https://ezscore-dcd70.firebaseio.com",
  storageBucket: "ezscore-dcd70.appspot.com",
  messagingSenderId: "193310380995"
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent},
  { path: 'users/edit/:id', component: EditUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    LoginViewComponent,
    EditUserViewComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseLoginConfig),
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [UserService, AuthService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
