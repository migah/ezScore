import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {UserService} from "./users/user.service";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';


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
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
