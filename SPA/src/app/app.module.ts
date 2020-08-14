import { MovieDetailedResolver } from './_resolvers/movie-detailed.resolver';
import { MovieDetailedComponent } from './movie/movie-detailed/movie-detailed.component';
import { ReleasedMovieCardComponent } from './movie/released-movie-card/released-movie-card.component';
import { ReleasedMovieListComponent } from './movie/released-movie-list/released-movie-list.component';
import { MovieListResolver } from './_resolvers/movie-list.resolver';
import { UnreleasedMovieCardComponent } from './movie/unreleased-movie-card/unreleased-movie-card.component';
import { MovieService } from './_services/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavComponent,
    CarouselComponent,
    HomeComponent,
    UnreleasedMovieCardComponent,
    ReleasedMovieListComponent,
    ReleasedMovieCardComponent,
    MovieDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    MovieService,
    MovieDetailedResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
