import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";
import {Match} from "../../match";

@Component({
  selector: 'ez-match-list-view',
  templateUrl: './match-list-view.component.html',
  styleUrls: ['./match-list-view.component.css']
})
export class MatchListViewComponent implements OnInit {

  newMatch: Match;

  @Input()
  mathes: Observable<Match[]>;

  @Output('addMatch')
  tryCreateMatch = new EventEmitter<Match>();

  constructor() {
    this.newMatch = new Match();
  }

  ngOnInit() {
  }

  addMatch() {
    this.newMatch.team1Score = 0;
    this.newMatch.team2Score = 0;
    this.newMatch.startTime = Date.now();
    this.tryCreateMatch.emit(this.newMatch)
  }

}
