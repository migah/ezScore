import { Component, OnInit } from '@angular/core';
import {MatchService} from "../match.service";
import {Observable} from "rxjs";
import {Match} from "../match";
import {AuthService} from "../../login/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ez-my-matches',
  templateUrl: './my-matches.component.html'
})
export class MyMatchesComponent implements OnInit {

  matches: Observable<Match[]>;
  userId: string;
  isLoggedIn: boolean;

  constructor(private matchService: MatchService, private authService: AuthService, private router: Router) {
    this.matches = matchService.getMatches();
    this.userId = authService.currentUserId();
  }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe((res) => {
      this.isLoggedIn = res;
    });
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
    }
  }

}
