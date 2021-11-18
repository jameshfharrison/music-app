import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  results: any;
  searchQuery: string;
  private routeToQuery: any;
  private artistSearch: any;

  constructor(
    private route: ActivatedRoute,
    private musicData: MusicDataService
  ) {
    this.searchQuery = '';
  }

  ngOnInit(): void {
    this.routeToQuery = this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'];
    });

    this.artistSearch = this.musicData
      .searchArtists(this.searchQuery)
      .subscribe((data) => {
        this.results = data.artists.items.filter(
          (x: any) => x.images.length > 0
        );
      });
  }

  ngOnDestroy(): void {
    this.routeToQuery.unsubscribe();
    this.artistSearch.unsubscribe();
  }
}
