import { UnreleasedMovie, ReleasedMovie } from './../_models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: UnreleasedMovie[];
  releasedMovies: ReleasedMovie[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.movies = data.movies;
      this.releasedMovies = data.releasedMovies;
    });
  }

}
