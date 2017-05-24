import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Match} from "../match";
import {MatchService} from "../match.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FilterService} from "../../filter/filter.service";
import {Sport} from "../../filter/sport";
import {AuthService} from "../../login/auth.service";

@Component({
  selector: 'ez-match-list',
  templateUrl: './match-list.component.html'
})
export class MatchListComponent implements OnInit {

  matches: Observable<Match[]>;
  sports: Observable<Sport[]>;
  cat: string;

  constructor(private matchService: MatchService, private route: ActivatedRoute, private filterService: FilterService, private authService: AuthService, private router: Router) {
    this.matches = matchService.getMatches();
    this.sports = filterService.getSports();
    this.getCategory();
  }

  ngOnInit() {
  }

  getCategory() {
    this.route.params.subscribe(params => {
      this.cat = params['cat'];
    });
  }

  goToEdit($key: string) {
    this.authService.isUserLoggedIn().subscribe(res => {
      if (!res)
        return;
    });
    this.authService.isCurrentUserAdmin().subscribe(res => {
      if (res) {
        this.router.navigate(['my-matches/edit/' + $key]);
      }
    });
  }
}
