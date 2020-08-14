import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.css']
})
export class MovieDetailedComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.movie = data.movie;
    });
  }

}
