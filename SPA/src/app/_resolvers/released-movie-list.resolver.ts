import { AlertifyService } from './../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { MovieService } from './../_services/movie.service';
import { ReleasedMovie } from './../_models/movie';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReleasedMovieListResolver implements Resolve<ReleasedMovie[]> {

    constructor(private movieService: MovieService, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ReleasedMovie[]> {
        return this.movieService.getReleasedMovies().pipe(
            catchError(error => {
                this.alertify.error(error);
                return of(null);
            })
        );
    }

}
