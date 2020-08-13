import { UnreleasedMovie } from './../_models/movie';
import { MovieService } from './../_services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: UnreleasedMovie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getUnreleasedMovies().subscribe(data => {
      this.movies = data;
    }, error => {
      console.log(error);
    });
  }

}
