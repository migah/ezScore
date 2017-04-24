import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Sport} from "./sport";

@Injectable()
export class FilterService {

  constructor(private af: AngularFire) { }

  getSports() : Observable<Sport[]> {
    return this.af.database.list('sport');
  }
}
