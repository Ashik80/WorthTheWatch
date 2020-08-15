import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  @Output() registerMode = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  deactivateRegisterMode(): void {
    this.registerMode.emit(false);
  }

}
