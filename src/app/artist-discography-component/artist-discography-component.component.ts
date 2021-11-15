import { Component, OnInit } from '@angular/core';
//import albumData from '../data/SearchResultsAlbums.json';
//import artistData from '../data/SearchResultsArtist.json';
import { MusicDataService } from '../music-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-discography-component',
  templateUrl: './artist-discography-component.component.html',
  styleUrls: ['./artist-discography-component.component.css'],
})
export class ArtistDiscographyComponentComponent implements OnInit {
  albums: any;
  artist: any;
  id: any;

  private artistRoute: any;
  private artistId: any;
  private artistDiscography: any;
  
  constructor(
    private musicData: MusicDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.artistRoute = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.artistId = this.musicData.getArtistById(this.id).subscribe((data) => {
      this.artist = data;
    });

    this.artistDiscography = this.musicData
      .getAlbumsByArtistId(this.id)
      .subscribe((data) => {
        this.albums = data.items.filter(
          (curValue: any, index: any, self: any) =>
            self.findIndex(
              (t: any) => t.name.toUpperCase() === curValue.name.toUpperCase()
            ) === index
        );
      });

  }

  ngOnDestroy() {
    this.artistRoute.unsubscribe();
    this.artistId.unsubscribe();
    this.artistDiscography.unsubscribe();
  }
}
