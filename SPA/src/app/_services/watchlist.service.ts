import { Observable } from 'rxjs';
import { ReleasedMovie } from './../_models/movie';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  baseUrl = environment.apiUrl + '/watchlist';

  constructor(private http: HttpClient) { }

  getWatchListedMovies(): Observable<ReleasedMovie[]> {
    return this.http.get<ReleasedMovie[]>(this.baseUrl);
  }

  addToWatchList(id: number): Observable<object> {
    return this.http.post(`${this.baseUrl}/${id}`, {});
  }

  removeFromWatchList(id: number): Observable<object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
