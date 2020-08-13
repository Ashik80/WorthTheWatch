import { UnreleasedMovie } from './../../_models/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: UnreleasedMovie[];

  constructor() { }

  ngOnInit(): void {
  }

  moviesArray(n: number): UnreleasedMovie[] {
    return Array(2);
  }

}
