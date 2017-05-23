import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../../match/match";
import {MatchService} from "../../match/match.service";

@Component({
  selector: 'ez-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  @Input()
  matches: Match[];

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
  }

}
