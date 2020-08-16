import { AlertifyService } from './../../_services/alertify.service';
import { UserService } from './../../_services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  @Output() registerMode = new EventEmitter<boolean>();
  user: any = {};
  confirmPassword: string;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: Router) { }

  ngOnInit(): void {
  }

  deactivateRegisterMode(): void {
    this.registerMode.emit(false);
  }

  register(): void {
    if (this.user.password === this.confirmPassword) {
      this.userService.register(this.user).subscribe(() => {
        this.alertify.success('Registration Successful');
        this.route.navigate(['/']);
      }, error => {
        this.alertify.error(error);
      });
    } else {
      this.alertify.error('Password does not match');
    }
  }

}
