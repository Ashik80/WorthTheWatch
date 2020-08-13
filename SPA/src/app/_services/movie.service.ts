import { UnreleasedMovie } from './../_models/movie';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
    baseUrl = environment.apiUrl + '/movies';

    constructor(private http: HttpClient) { }

    getUnreleasedMovies(): Observable<UnreleasedMovie[]> {
        return this.http.get<UnreleasedMovie[]>(this.baseUrl);
    }

}
