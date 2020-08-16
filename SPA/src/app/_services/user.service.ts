import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

export const getToken = () => localStorage.getItem('token');

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + '/users';
  decodedToken: any;
  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(user: any): Observable<void> {
    return this.http.post(`${this.baseUrl}/login`, user).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        this.decodedToken = this.helper.decodeToken(response.token);
      })
    );
  }

  register(user: any): Observable<void> {
    return this.http.post(`${this.baseUrl}/register`, user).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        this.decodedToken = this.helper.decodeToken(response.token);
      }),
    );
  }

  isLoggedIn(): boolean {
    const token = getToken();
    return !this.helper.isTokenExpired(token);
  }

}
