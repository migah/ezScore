import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Match} from "../match";
import {MatchService} from "../match.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ez-match-list',
  templateUrl: './match-list.component.html'
})
export class MatchListComponent implements OnInit {

  matches: Observable<Match[]>;
  cat: string;

  constructor(private matchService: MatchService, private route: ActivatedRoute) {
    this.matches = matchService.getMatches();
    this.getCategory();
  }

  ngOnInit() {
  }

  getCategory() {
    this.route.params.subscribe(params => {
      this.cat = params['cat'];
    });
  }

}
