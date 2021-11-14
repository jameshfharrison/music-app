import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';

import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  constructor(private spotifyToken: SpotifyTokenService, private http: HttpClient) { }

favouritesList: Array<any> = [];

  getNewReleases(): Observable<any> {
      return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
        return this.http.get<any>("https://api.spotify.com/v1/browse/new-releases", { headers: { "Authorization": `Bearer ${token}` } });
      }));
  }


  getArtistById(id: string): Observable<any> {
	return this.http.get<any>(`https://api.spotify.com/v1/artists/${id}/albums`, { headers: { "Authorization": `Bearer ${token}`} });
 	 } 
  

getAlbumsByArtistId(id: string) : Observable<any> {
	return this.http.get<any>(`https://api.spotify.com/v1/artists/${id}/albums`, { headers: {
		"Authorization" : `Bearer ${token}` }, params: { "include_groups" : 'album,single', "limit" : '50'} } );
}
		
getAlbumById(id: string) : Observable<any> {
	return this.http.get<any>(`https://api.spotify.com/v1/albums/${id}`, {headers: {
		"Authorization" : `Bearer ${token}`} });
}

searchArtists(searchString: string) : Observable<any> {
	return this.http.get<any>(`https://api.spotify.com/v1/search`, {headers: {
	"Authorization" : `Bearer ${token}` }, params: {"q": `${searchString}`, "type": "artist", "limit": "50"} } ); 	
}

addToFavourites(id : string) : void {
	if (id === null || id === undefined || favouritesList.length >= 50) {
		return false;
	} else {
		favouritesList.push(id);
		return true;
	}
}

removeFromFavourites(id: string) : Observable<any> {

}

}



