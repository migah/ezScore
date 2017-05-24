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
import { MatchListComponent } from './match/match-list/match-list.component';
import { MatchListViewComponent } from './match/match-list/match-list-view/match-list-view.component';
import {MatchService} from "./match/match.service";
import { MatchEditComponent } from './match/match-edit/match-edit.component';
import { MatchEditViewComponent } from './match/match-edit/match-edit-view/match-edit-view.component';
import {MomentModule} from "angular2-moment";
import { MyMatchesComponent } from './match/my-matches/my-matches.component';
import { MyMatchesViewComponent } from './match/my-matches/my-matches-view/my-matches-view.component';
import {FilterService} from "./filter/filter.service";
import { NewMatchComponent } from './match/my-matches/new-match/new-match.component';
import { NewMatchViewComponent } from './match/my-matches/new-match/new-match-view/new-match-view.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { EditProfileViewComponent } from './users/edit-profile/edit-profile-view/edit-profile-view.component';

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
  { path: 'users/edit/:id', component: EditUserComponent},
  { path: 'matches/:cat', component: MatchListComponent},
  { path: 'my-matches/edit/:id', component: MatchEditComponent},
  { path: 'my-matches', component: MyMatchesComponent},
  { path: 'my-matches/new', component: NewMatchComponent},
  { path: 'editprofile', component: EditProfileComponent}
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
    EditUserComponent,
    MatchListComponent,
    MatchListViewComponent,
    MatchEditComponent,
    MatchEditViewComponent,
    MyMatchesComponent,
    MyMatchesViewComponent,
    NewMatchComponent,
    NewMatchViewComponent,
    HomeViewComponent,
    EditProfileComponent,
    EditProfileViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseLoginConfig),
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MomentModule
  ],
  providers: [UserService, AuthService, RoleService, MatchService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
