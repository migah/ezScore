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

  @Input()
  matches: Observable<Match[]>;

  @Input()
  userId: string;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  goToEdit($key: string) {
    this.router.navigate(['my-matches/edit/' + $key]);
  }

}
