import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Match} from "../../match";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../../login/auth.service";
import {MatchService} from "../../match.service";

@Component({
  selector: 'ez-my-matches-view',
  templateUrl: './my-matches-view.component.html'
})
export class MyMatchesViewComponent implements OnInit {

  @Input()
  matches: Observable<Match[]>;

  @Input()
  userId: string;

  @Output("goToEdit")
  tryEditEmitter = new EventEmitter<string>();

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
  }

  goToEdit($key: string) {
    this.tryEditEmitter.emit($key);
  }

  live(match: Match) : boolean {
    return this.matchService.isMatchLive(match);
  }

}
