/*********************************************************************************
 * * WEB422 – Assignment 6
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: James Harrison Student ID: 100608207 Date: November 16, 2021
 *
 * Angular App (Deployed) Link: https://zealous-archimedes-09688b.netlify.app/
 *
 * User API (Heroku) Link: https://web422-spotify-user-api.herokuapp.com
 *
 ********************************************************************************/
import { Component } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';
import { OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchString: string;
  title = 'web422-a5';
  token: any;

  constructor(private router: Router, private auth: AuthService) {
    this.searchString = '';
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      //ensures that you can search multiple times without refreshing the page.
      return false;
    };
  }

  handleSearch() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = '';
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
