import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService, getToken } from './_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  helper = new JwtHelperService();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const token = getToken();
    if (token) {
      this.userService.decodedToken = this.helper.decodeToken(token);
    }
  }

}
