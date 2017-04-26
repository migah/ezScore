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

  @Output('deleteMatch')
  tryDeleteEmitter = new EventEmitter<Match>();

  @Output('updateMatch')
  tryUpdateEmitter = new EventEmitter<Match>();

  @Output('addRound')
  tryAddRoundEmitter = new EventEmitter<Match>();

  @Output('removeRound')
  tryRemoveRoundEmitter = new EventEmitter<Match>();

  constructor() { }

  ngOnInit() {
  }

  tryEdit() {
    this.tryEditEmitter.emit(this.match);
  }

  tryDelete() {
    this.tryDeleteEmitter.emit(this.match);
  }

  tryUpdate() {
    this.tryUpdateEmitter.emit(this.match);
  }

  tryAddRound() {
    this.tryAddRoundEmitter.emit(this.match);
  }

  tryRemoveRound() {
    this.tryRemoveRoundEmitter.emit(this.match);
  }

}
