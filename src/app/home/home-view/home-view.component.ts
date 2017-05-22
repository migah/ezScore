import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Match} from "../../match/match";
import {MatchService} from "../../match/match.service";

@Component({
  selector: 'ez-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  i: number;

  @Input()
  matches: Observable<Match[]>;

  constructor(private matchService: MatchService) {
    this.i = 0;
  }

  ngOnInit() {
  }

  private live(match: Match) : boolean {
    let bool = this.matchService.isMatchLive(match);
    if (bool)
      this.i++;
    return bool;
  }

}
