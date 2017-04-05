import { Component, OnInit } from '@angular/core';
import {Match} from "../match";
import {ActivatedRoute, Router} from "@angular/router";
import {MatchService} from "../match.service";

@Component({
  selector: 'ez-match-edit',
  templateUrl: './match-edit.component.html'
})
export class MatchEditComponent implements OnInit {

  match: Match;

  constructor(private route: ActivatedRoute, private matchService: MatchService, private router: Router) { }

  ngOnInit() {
    this.getMatchToEdit();
  }

  getMatchToEdit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.matchService.getMatch(id).subscribe((match) => {
        if (match) {
          this.match = match;
        }
      })
    })
  }

  editMatch(matchToEdit: Match) {
    this.matchService.editMatch(matchToEdit);
    this.router.navigate(['matches/live']);
  }

}
