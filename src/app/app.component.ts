/*********************************************************************************
 * * WEB422 – Assignment 5
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: James Harrison Student ID: 100608207 Date: November 16, 2021
 *
 *
 ********************************************************************************/
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchString: string;
  title = 'web422-a5';

  constructor(private router: Router) {
    this.searchString = '';
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      //code to ensure that you can search multiple times.
      return false;
    };
  }

  handleSearch() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = '';
  }
}
