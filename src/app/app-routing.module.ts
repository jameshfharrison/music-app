import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { AlbumComponentComponent } from './album-component/album-component.component';
import { ArtistDiscographyComponentComponent } from './artist-discography-component/artist-discography-component.component';
import { NewReleasesComponentComponent } from './new-releases-component/new-releases-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [
  { path: 'newReleases', component: NewReleasesComponentComponent },
  { path: 'artist/:id', component: ArtistDiscographyComponentComponent },
  { path: 'album/:id', component: AlbumComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: '', redirectTo: '/newReleases', pathMatch: 'full' },
  { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
