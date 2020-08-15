import { MovieService } from '../_services/movie.service';
import { UnreleasedMovie } from '../_models/movie';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UnreleasedMovieListResolver implements Resolve<UnreleasedMovie> {

    constructor(private movieService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<UnreleasedMovie> {
        return this.movieService.getUnreleasedMovies().pipe(
            catchError(error => {
                console.log(error);
                return of(null);
            })
        );
    }
}
