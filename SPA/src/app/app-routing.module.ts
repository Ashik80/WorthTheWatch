import { MovieDetailedComponent } from './movie/movie-detailed/movie-detailed.component';
import { ReleasedMovieListResolver } from './_resolvers/released-movie-list.resolver';
import { MovieListResolver } from './_resolvers/movie-list.resolver';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailedResolver } from './_resolvers/movie-detailed.resolver';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    resolve: {
      movies: MovieListResolver,
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
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
