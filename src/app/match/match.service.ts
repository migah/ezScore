import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Match} from "./match";
import {Observable} from "rxjs";

@Injectable()
export class MatchService {

  constructor(private af: AngularFire) { }

  addMatch(match: Match) {
    this.af.database.list('matches').push(match);
  }

  getMatches() : Observable<Match[]> {
    return this.af.database.list('matches');
  }

}
