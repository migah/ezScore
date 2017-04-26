import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";
import {Match} from "../../match";
import {Router} from "@angular/router";
import {AuthService} from "../../../login/auth.service";
import {FilterService} from "../../../filter/filter.service";
import {Sport} from "../../../filter/sport";

@Component({
  selector: 'ez-match-list-view',
  templateUrl: './match-list-view.component.html',
  styleUrls: ['./match-list-view.component.css']
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

  constructor(private router: Router, private filterService: FilterService) {
    filterService.getSports().subscribe(sports => this.sports = sports);
    this.now = new Date();
    this.now.setHours(this.now.getHours() + 2);
  }

  ngOnInit() {
  }

  live(date: Date) : boolean {
    var dat1 = Date.parse(date.toString());
    var dat2 = Date.parse(this.now.toString())

    if (dat1 <= dat2) {
      return true;
    } else {
      return false;
    }
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
    if (match.team1.toLowerCase().includes(this.searchTerm.toLowerCase()) || match.team2.toLowerCase().includes(this.searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  }
}
