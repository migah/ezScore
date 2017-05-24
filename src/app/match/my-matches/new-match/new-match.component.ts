import { Component, OnInit } from '@angular/core';
import {Match} from "../../match";
import {MatchService} from "../../match.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../login/auth.service";
import {Round} from "../../round";
import {Sport} from "../../../filter/sport";
import {FilterService} from "../../../filter/filter.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'ez-new-match',
  templateUrl: './new-match.component.html'
})
export class NewMatchComponent implements OnInit {

  sports: Observable<Sport[]>;

  constructor(private matchService: MatchService, private authService: AuthService, private router: Router, private filterService: FilterService) {
  }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe((res) => {
      if (!res)
        this.router.navigate(['login']);
    });
    this.sports = this.filterService.getSports();
  }

  addMatch(newMatch: Match) {
    newMatch.team1Score = 0;
    newMatch.team2Score = 0;
    newMatch.isFinished = false;
    newMatch.creatorId = this.authService.currentUserId();
    newMatch.rounds = [];
    newMatch.rounds.push({team1score: 0, team2score: 0, roundNo: 1});
    this.matchService.addMatch(newMatch);
    this.router.navigate(['my-matches']);
  }

}
