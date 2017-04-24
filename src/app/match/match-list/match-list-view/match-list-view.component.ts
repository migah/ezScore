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
}
