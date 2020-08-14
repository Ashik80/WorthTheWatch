import { Component, OnInit, Input } from '@angular/core';
import { faStar, faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ReleasedMovie } from 'src/app/_models/movie';

@Component({
  selector: 'app-released-movie-list',
  templateUrl: './released-movie-list.component.html',
  styleUrls: ['./released-movie-list.component.css']
})
export class ReleasedMovieListComponent implements OnInit {
  faChevronRight = faChevronRight;
  @Input() releasedMovies: ReleasedMovie[];

  constructor() { }

  ngOnInit(): void {
  }

}
