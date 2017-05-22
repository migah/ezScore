import { Component, OnInit } from '@angular/core';
import {MatchService} from "../match/match.service";
import {Observable} from "rxjs/Observable";
import {Match} from "../match/match";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  matches: Observable<Match[]>;

  constructor(private matchService: MatchService) {
    this.matches = matchService.getMatches();
  }

  ngOnInit() {
  }

}
