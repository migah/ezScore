import { Component, OnInit } from '@angular/core';
import {Match} from "../../match";
import {MatchService} from "../../match.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../login/auth.service";

@Component({
  selector: 'ez-new-match',
  templateUrl: './new-match.component.html'
})
export class NewMatchComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private matchService: MatchService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe((res) => {
      this.isLoggedIn = res;
    });
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
    }
  }

  addMatch(newMatch: Match) {
    this.matchService.addMatch(newMatch);
    this.router.navigate(['my-matches']);
  }

}
