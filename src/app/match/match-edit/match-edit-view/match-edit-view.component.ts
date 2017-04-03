import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Match} from "../../match";

@Component({
  selector: 'ez-match-edit-view',
  templateUrl: './match-edit-view.component.html',
  styleUrls: ['./match-edit-view.component.css']
})
export class MatchEditViewComponent implements OnInit {

  @Input()
  match: Match;

  @Output('editMatch')
  tryEditEmitter = new EventEmitter<Match>();

  constructor() { }

  ngOnInit() {
  }

  tryEdit() {
    this.tryEditEmitter.emit(this.match);
  }

  goalTeam1() {
    this.match.team1Score++;
  }

  goalTeam2() {
    this.match.team2Score++;
  }

}
