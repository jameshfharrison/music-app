import { Component, OnInit } from '@angular/core';
import albumData from '../data/SearchResultsAlbum.json';

@Component({
  selector: 'app-album-component',
  templateUrl: './album-component.component.html',
  styleUrls: ['./album-component.component.css'],
})
export class AlbumComponentComponent implements OnInit {
  album: any;

  constructor() {}

  ngOnInit(): void {
    this.album = albumData;
    console.log(this.album);
  }
}
