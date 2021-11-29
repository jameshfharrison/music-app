import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { AlbumComponentComponent } from './album-component/album-component.component';
import { ArtistDiscographyComponentComponent } from './artist-discography-component/artist-discography-component.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NewReleasesComponentComponent } from './new-releases-component/new-releases-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GuardAuthService } from './guard-auth.service';

const routes: Routes = [
  {
    path: 'newReleases',
    component: NewReleasesComponentComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'artist/:id',
    component: ArtistDiscographyComponentComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'album/:id',
    component: AlbumComponentComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'about',
    component: AboutComponentComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'search',
    component: SearchResultComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
    canActivate: [GuardAuthService],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/newReleases', pathMatch: 'full' },
  { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
