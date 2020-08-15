import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.css']
})
export class MovieDetailedComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.movie = data.movie;
    });
  }

  trailerUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerUrl);
  }

  dateFormat(): string {
    const time = new Date(this.movie.releaseInfo);
    return time.toDateString();
  }

}
