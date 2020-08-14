import { catchError } from 'rxjs/operators';
import { MovieService } from './../_services/movie.service';
import { ReleasedMovie } from './../_models/movie';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReleasedMovieListResolver implements Resolve<ReleasedMovie[]> {

    constructor(private movieService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ReleasedMovie[]> {
        return this.movieService.getReleasedMovies().pipe(
            catchError(error => {
                console.log(error);
                return of(null);
            })
        );
    }

}
