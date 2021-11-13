import { Component, OnInit } from '@angular/core';
import data from '../data/NewReleasesAlbums.json';

@Component({
  selector: 'app-new-releases-component',
  templateUrl: './new-releases-component.component.html',
  styleUrls: ['./new-releases-component.component.css'],
})
export class NewReleasesComponentComponent implements OnInit {
  releases = new Array();
  constructor() {}

  ngOnInit(): void {
    this.releases = data.albums.items;
  }
}
