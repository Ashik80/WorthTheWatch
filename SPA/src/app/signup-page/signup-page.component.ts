import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  registerMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateRegisterMode(): void {
    this.registerMode = true;
  }

  deactivateRegisterMode(event: boolean): void {
    this.registerMode = event;
  }

}
