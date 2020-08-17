import { WatchListResolver } from './_resolvers/watchlist.resolver';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { UserGuard } from './_guards/user.guard';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { UnreleasedMoviesComponent } from './unreleased-movie/unreleased-movies/unreleased-movies.component';
import { UnreleasedMovieDetailedResolver } from './_resolvers/unreleased-movie-detailed.resolver';
import { MovieDetailedComponent } from './movie/movie-detailed/movie-detailed.component';
import { ReleasedMovieListResolver } from './_resolvers/released-movie-list.resolver';
import { UnreleasedMovieListResolver } from './_resolvers/unreleased-movie-list.resolver';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailedResolver } from './_resolvers/movie-detailed.resolver';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    resolve: {
      movies: UnreleasedMovieListResolver,
      releasedMovies: ReleasedMovieListResolver
    }
  },
  {
    path: 'movie/:id', component: MovieDetailedComponent,
    resolve: {
      movie: MovieDetailedResolver
    }
  },
  {
    path: 'unreleased-movies', component: UnreleasedMoviesComponent,
    resolve: { movies: UnreleasedMovieListResolver }
  },
  {
    path: 'unreleased-movie/:id', component: MovieDetailedComponent,
    resolve: {
      movie: UnreleasedMovieDetailedResolver
    }
  },
  {
    path: 'sign-in', component: SignupPageComponent
  },
  {
    path: 'watchlist', component: WatchlistComponent,
    runGuardsAndResolvers: 'always', canActivate: [UserGuard],
    resolve: {
      movies: WatchListResolver
    }
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
