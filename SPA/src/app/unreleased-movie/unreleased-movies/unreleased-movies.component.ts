import { UnreleasedMovie } from '../../_models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unreleased-movies',
  templateUrl: './unreleased-movies.component.html',
  styleUrls: ['./unreleased-movies.component.css']
})
export class UnreleasedMoviesComponent implements OnInit {
  movies: UnreleasedMovie[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.movies = data.movies;
    });
  }

}
