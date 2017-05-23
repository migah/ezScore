import { Component, OnInit } from '@angular/core';
import {Match} from "../match";
import {ActivatedRoute, Router} from "@angular/router";
import {MatchService} from "../match.service";
import {MdSnackBar} from "@angular/material";
import {AuthService} from "../../login/auth.service";

@Component({
  selector: 'ez-match-edit',
  templateUrl: './match-edit.component.html'
})
export class MatchEditComponent implements OnInit {

  match: Match;
  isAdmin: boolean;

  constructor(private route: ActivatedRoute, private matchService: MatchService, private router: Router, private snackBar: MdSnackBar, private authService: AuthService) { }

  ngOnInit() {
    this.getMatchToEdit();
    this.authService.isCurrentUserAdmin().subscribe((res) => {
      if (!res && !this.authService.isUserLoggedIn() && this.authService.currentUserId() != this.match.creatorId) {
        this.router.navigate(['']);
      }
    });

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
    this.router.navigate(['my-matches']);
  }

  updateMatch(matchToEdit: Match) {
    this.matchService.editMatch(matchToEdit);
    this.snackBar.open("Match updated", "OK", {
      duration: 2000,
    });
  }

  deleteMatch(matchToDelete: Match) {
    this.matchService.deleteMatch(matchToDelete.$key);
    this.router.navigate(['my-matches']);
  }

  addRound(match: Match) {
    match.rounds.push({roundNo: match.rounds.length + 1, team1score: 0, team2score: 0})
    this.updateMatch(match);
  }

  removeRound(match: Match) {
    if (match.rounds.length == 1) {
      return;
    }
    match.rounds.pop();
    this.updateMatch(match);
  }
}
