import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Match} from "./match";
import {Observable} from "rxjs";
import {isUndefined} from "util";

@Injectable()
export class MatchService {

  constructor(private af: AngularFire) { }

  addMatch(match: Match) {
    this.af.database.list('matches').push(match);
  }

  getMatches() : Observable<Match[]> {
    return this.af.database.list('matches');
  }

  editMatch(match: Match) {
    this.af.database.object('matches/' + match.$key).update(match);
  }

  getMatch($key: string) : Observable<Match> {
    return this.af.database.object('matches/' + $key);
  }

  deleteMatch($key: string) {
    if ($key => !isUndefined) {
      this.af.database.object('matches/' + $key).remove();
    }
  }

  isMatchLive(match: Match) : boolean {
    if (match.isFinished)
      return false;

    //new Date() returns the time right now
    let now = new Date();

    let dat1 = Date.parse(match.startTime.toString());
    let dat2 = Date.parse(now.toString());

    //Returns true if start time is less (before) the current time, meaning the game has started
    return (dat1 <= dat2)
  }

  getLiveMatches(amount: number) : Observable<Match[]> {
    return this.getMatches().switchMap(matches => {
      const firstThree = [];
      matches.forEach(match => {
        if (this.isMatchLive(match) && firstThree.length < amount) {
          firstThree.push(match);
        }
      });
      return Observable.of(firstThree);
    });
  }

}
