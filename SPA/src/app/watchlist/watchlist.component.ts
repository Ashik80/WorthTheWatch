import { AlertifyService } from './../_services/alertify.service';
import { WatchlistService } from './../_services/watchlist.service';
import { ActivatedRoute } from '@angular/router';
import { ReleasedMovie } from './../_models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  movies: ReleasedMovie[];

  constructor(
    private route: ActivatedRoute,
    private watchlistService: WatchlistService,
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.movies = data.movies;
    });
  }

  removeMovie(id: number): void {
    this.watchlistService.removeFromWatchList(id).subscribe(
      () => {
        this.movies = this.movies.filter((x) => x.id !== id);
      },
      (error) => {
        this.alertify.error(error);
        console.log(error);
      }
    );
  }
}
