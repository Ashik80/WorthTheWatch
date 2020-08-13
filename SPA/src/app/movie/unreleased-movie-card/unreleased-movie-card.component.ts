import { UnreleasedMovie } from './../../_models/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unreleased-movie-card',
  templateUrl: './unreleased-movie-card.component.html',
  styleUrls: ['./unreleased-movie-card.component.css']
})
export class UnreleasedMovieCardComponent implements OnInit {
  @Input() movie: UnreleasedMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
