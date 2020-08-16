import { AlertifyService } from './../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { MovieService } from './../_services/movie.service';
import { ReleasedMovie } from './../_models/movie';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class MovieDetailedResolver implements Resolve<ReleasedMovie> {

    constructor(private movieService: MovieService, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ReleasedMovie> {
        return this.movieService.getReleasedMovie(route.params.id).pipe(
            catchError(error => {
                this.alertify.error(error);
                return of(null);
            })
        );
    }
}
