import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = false;

  constructor(public userService: UserService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
  }

}
