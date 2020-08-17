import { AlertifyService } from './../../_services/alertify.service';
import { WatchlistService } from './../../_services/watchlist.service';
import { Component, OnInit, Input } from '@angular/core';
import { ReleasedMovie } from 'src/app/_models/movie';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-released-movie-card',
  templateUrl: './released-movie-card.component.html',
  styleUrls: ['./released-movie-card.component.css']
})
export class ReleasedMovieCardComponent implements OnInit {
  @Input() movie: ReleasedMovie;
  faStar = faStar;
  faPlus = faPlus;

  constructor(private watchlistServie: WatchlistService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  addToWatchlist(id: number): void {
    this.watchlistServie.addToWatchList(id).subscribe(() => {
      this.alertify.success('Added');
    }, error => {
      this.alertify.error(error);
    });
  }

}
