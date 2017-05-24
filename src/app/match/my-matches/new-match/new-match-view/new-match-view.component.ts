import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Match} from "../../../match";
import {Sport} from "../../../../filter/sport";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'ez-new-match-view',
  templateUrl: './new-match-view.component.html'
})
export class NewMatchViewComponent implements OnInit {

  newMatch: Match;

  @Input()
  sports: Observable<Sport[]>;

  @Output('addMatch')
  tryCreateMatch = new EventEmitter<Match>();

  constructor() {
    this.newMatch = new Match();
  }

  ngOnInit() {
  }

  addMatch() {
    this.tryCreateMatch.emit(this.newMatch)
  }
}
