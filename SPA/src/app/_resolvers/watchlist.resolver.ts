import { AlertifyService } from './../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { WatchlistService } from './../_services/watchlist.service';
import { ReleasedMovie } from './../_models/movie';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WatchListResolver implements Resolve<ReleasedMovie[]> {

    constructor(private watchlistService: WatchlistService, private alertify: AlertifyService) { }

    resolve(): Observable<ReleasedMovie[]> {
        return this.watchlistService.getWatchListedMovies().pipe(
            catchError(error => {
                console.log(error);
                this.alertify.error('Cannot load watchlisted items');
                return of(null);
            })
        );
    }
}
