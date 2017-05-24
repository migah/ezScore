import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";
import {Match} from "../../match";
import {Router} from "@angular/router";
import {AuthService} from "../../../login/auth.service";
import {FilterService} from "../../../filter/filter.service";
import {Sport} from "../../../filter/sport";
import {MatchService} from "../../match.service";

@Component({
  selector: 'ez-match-list-view',
  templateUrl: './match-list-view.component.html'
})
export class MatchListViewComponent implements OnInit {

  sport: Sport;
  searchTerm: string;

  @Input()
  matches: Observable<Match[]>;

  @Input()
  cat: string;

  @Input()
  sports: Observable<Sport[]>;

  @Output('goToEdit')
  tryEditEmitter = new EventEmitter<string>();

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
  }

  live(match: Match) : boolean {
    return this.matchService.isMatchLive(match)
  }

  currentSport(match: Match) : boolean {
    if (this.sport) {
      return match.sport.name == this.sport.name;
    } else {
      return true;
    }
  }

  search(match: Match) : boolean {
    if (!this.searchTerm || this.searchTerm == "") {
      return true;
    }
    return match.team1.toLowerCase().includes(this.searchTerm.toLowerCase()) || match.team2.toLowerCase().includes(this.searchTerm.toLowerCase());
  }

  goToEdit($key: string) {
    this.tryEditEmitter.emit($key);
  }
}
