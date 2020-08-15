import { UnreleasedMovie } from './../../_models/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unreleased-trailer-card',
  templateUrl: './unreleased-trailer-card.component.html',
  styleUrls: ['./unreleased-trailer-card.component.css']
})
export class UnreleasedTrailerCardComponent implements OnInit {
  @Input() movie: UnreleasedMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
