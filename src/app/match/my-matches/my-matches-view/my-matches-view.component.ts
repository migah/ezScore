import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Match} from "../../match";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../../login/auth.service";
import {MatchService} from "../../match.service";

@Component({
  selector: 'ez-my-matches-view',
  templateUrl: './my-matches-view.component.html',
  styleUrls: ['./my-matches-view.component.css']
})
export class MyMatchesViewComponent implements OnInit {

  now: Date;

  @Input()
  matches: Observable<Match[]>;

  @Input()
  userId: string;

  constructor(private router: Router, private matchService: MatchService) {
    this.now = new Date();
    this.now.setHours(this.now.getHours() + 2);
  }

  ngOnInit() {
  }

  goToEdit($key: string) {
    this.router.navigate(['my-matches/edit/' + $key]);
  }

  live(match: Match) : boolean {
    return this.matchService.isMatchLive(match);
  }

}
