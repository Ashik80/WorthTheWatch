import { UnreleasedMovie } from './../_models/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() movies: UnreleasedMovie[];

  constructor() { }

  ngOnInit(): void { }
}
