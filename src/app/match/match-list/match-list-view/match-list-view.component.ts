import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";
import {Match} from "../../match";
import {Router} from "@angular/router";

@Component({
  selector: 'ez-match-list-view',
  templateUrl: './match-list-view.component.html',
  styleUrls: ['./match-list-view.component.css']
})
export class MatchListViewComponent implements OnInit {

  newMatch: Match;
  now: Date;
  time: Date;

  @Input()
  matches: Observable<Match[]>;

  @Input()
  cat: string;

  @Output('addMatch')
  tryCreateMatch = new EventEmitter<Match>();

  constructor(private router: Router) {
    this.newMatch = new Match();
    this.now = new Date(Date.now());
  }

  ngOnInit() {
  }

  addMatch() {
    this.newMatch.team1Score = 0;
    this.newMatch.team2Score = 0;
    this.newMatch.startTime = this.time;
    this.tryCreateMatch.emit(this.newMatch)
  }

  goToEdit($key: string) {
    this.router.navigate(['matches/edit/' + $key]);
  }

  live(date: Date) : boolean {
    var dat1 = Date.parse(date.toString());
    var dat2 = Date.parse(this.now.toString());

    if (dat1 <= dat2) {
      return true;
    } else {
      return false;
    }
  }
}
