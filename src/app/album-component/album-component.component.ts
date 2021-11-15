import { Component, OnInit } from '@angular/core';
//import albumData from '../data/SearchResultsAlbum.json';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-album-component',
  templateUrl: './album-component.component.html',
  styleUrls: ['./album-component.component.css'],
})

export class AlbumComponentComponent implements OnInit {
  album: any;
  id: any;
  private albumRoute: any;
  private searchAlbum: any;
  constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private musicData: MusicDataService) {}

  ngOnInit(): void {
	
	  this.albumRoute = this.route.params.subscribe((params) => {
		  this.id = params['id'];
	  });

	  this.searchAlbum = this.musicData.getAlbumById(this.id).subscribe((data) => {
		  this.album = data;
      console.log(this.album);
	  }); 
  }

  ngOnDestroy() {
	this.albumRoute.unsubscribe();
	this.searchAlbum.unsubscribe();
  }
}
