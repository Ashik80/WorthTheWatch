import { AlertifyService } from './../../_services/alertify.service';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService, private alertify: AlertifyService, private route: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.user).subscribe(() => {
      this.alertify.success('Login Successful');
      this.route.navigate(['/']);
    }, error => {
      this.alertify.error(error);
    });
  }

}
