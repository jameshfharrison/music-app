import { Component, OnInit } from '@angular/core';
//import data from '../data/NewReleasesAlbums.json';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-new-releases-component',
  templateUrl: './new-releases-component.component.html',
  styleUrls: ['./new-releases-component.component.css'],
})
export class NewReleasesComponentComponent implements OnInit {
  releases: any;
  private releaseSub: any;
  constructor(private musicData: MusicDataService) {}

  ngOnInit(): void {
    this.releaseSub = this.musicData.getNewReleases().subscribe((data) => {
      this.releases = data.albums.items;
    });
  }
  ngOnDestroy() {
    this.releaseSub.unsubscribe();
  }
}
