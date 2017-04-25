import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Match} from "../../../match";
import {AuthService} from "../../../../login/auth.service";
import {Sport} from "../../../../filter/sport";
import {FilterService} from "../../../../filter/filter.service";
import {Round} from "../../../round";

@Component({
  selector: 'ez-new-match-view',
  templateUrl: './new-match-view.component.html',
  styleUrls: ['./new-match-view.component.css']
})
export class NewMatchViewComponent implements OnInit {

  newMatch: Match;
  time: Date;
  sport: Sport;
  sports: Sport[];

  @Output('addMatch')
  tryCreateMatch = new EventEmitter<Match>();

  constructor(private authService: AuthService, private filterService: FilterService) {
    this.newMatch = new Match();
    filterService.getSports().subscribe(sports => this.sports = sports);
  }

  ngOnInit() {
  }

  addMatch() {
    this.newMatch.team1Score = 0;
    this.newMatch.team2Score = 0;
    this.newMatch.startTime = this.time;
    this.newMatch.isFinished = false;
    this.newMatch.creatorId = this.authService.currentUserId();
    this.newMatch.sport = this.sport;
    this.newMatch.rounds = new Array<Round>();
    this.newMatch.rounds.push({team1score: 0, team2score: 0, roundNo: 1});
    this.tryCreateMatch.emit(this.newMatch)
  }
}
