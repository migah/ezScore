import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Match} from "../match";
import {MatchService} from "../match.service";

@Component({
  selector: 'ez-match-list',
  templateUrl: './match-list.component.html'
})
export class MatchListComponent implements OnInit {

  matches: Observable<Match[]>;
  match: Match;

  constructor(private matchService: MatchService) {
    this.matches = matchService.getMatches();
  }

  ngOnInit() {
  }

  addMatch(newMatch: Match) {
    this.matchService.addMatch(newMatch);
  }

}
