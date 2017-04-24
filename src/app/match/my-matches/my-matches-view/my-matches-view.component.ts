import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Match} from "../../match";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../../login/auth.service";

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

  constructor(private router: Router) {
    this.now = new Date();
    this.now.setHours(this.now.getHours() + 2);
  }

  ngOnInit() {
  }

  goToEdit($key: string) {
    this.router.navigate(['my-matches/edit/' + $key]);
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

}
