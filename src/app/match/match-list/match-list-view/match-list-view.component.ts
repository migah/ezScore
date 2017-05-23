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

  sports: Sport[];
  now: Date;
  sport: Sport;
  searchTerm: string;

  @Input()
  matches: Observable<Match[]>;

  @Input()
  cat: string;

  constructor(private router: Router, private filterService: FilterService, private matchService: MatchService) {
    filterService.getSports().subscribe(sports => this.sports = sports);
    this.now = new Date();
    this.now.setHours(this.now.getHours() + 2);
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
}
