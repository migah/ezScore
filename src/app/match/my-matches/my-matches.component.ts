import { Component, OnInit } from '@angular/core';
import {MatchService} from "../match.service";
import {Observable} from "rxjs";
import {Match} from "../match";
import {AuthService} from "../../login/auth.service";

@Component({
  selector: 'ez-my-matches',
  templateUrl: './my-matches.component.html'
})
export class MyMatchesComponent implements OnInit {

  matches: Observable<Match[]>;
  userId: string;

  constructor(private matchService: MatchService, private authService: AuthService) {
    this.matches = matchService.getMatches();
    this.userId = authService.currentUserId();
  }

  ngOnInit() {
  }

}
