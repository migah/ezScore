import {Component, OnInit, Input} from '@angular/core';
import {Match} from "../../match";
import {Observable} from "rxjs";

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

  constructor() { }

  ngOnInit() {
  }

}
