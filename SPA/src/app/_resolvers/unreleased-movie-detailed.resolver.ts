import { AlertifyService } from './../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { MovieService } from './../_services/movie.service';
import { UnreleasedMovie } from './../_models/movie';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class UnreleasedMovieDetailedResolver implements Resolve<UnreleasedMovie> {

    constructor(private movieService: MovieService, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<UnreleasedMovie> {
        return this.movieService.getUnreleasedMovie(route.params.id).pipe(
            catchError(error => {
                this.alertify.error(error);
                return of(null);
            })
        );
    }
}
