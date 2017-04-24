import { Component, OnInit } from '@angular/core';
import {Match} from "../../match";
import {MatchService} from "../../match.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ez-new-match',
  templateUrl: './new-match.component.html'
})
export class NewMatchComponent implements OnInit {

  constructor(private matchService: MatchService, private router: Router) { }

  ngOnInit() {
  }

  addMatch(newMatch: Match) {
    this.matchService.addMatch(newMatch);
    this.router.navigate(['my-matches']);
  }

}
