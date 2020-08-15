import { SignupFormComponent } from './signup-page/signup-form/signup-form.component';
import { SigninFormComponent } from './signup-page/signin-form/signin-form.component';
import { UnreleasedTrailerCardComponent } from './unreleased-movie/unreleased-trailer-card/unreleased-trailer-card.component';
import { UnreleasedMovieDetailedResolver } from './_resolvers/unreleased-movie-detailed.resolver';
import { MovieDetailedResolver } from './_resolvers/movie-detailed.resolver';
import { MovieDetailedComponent } from './movie/movie-detailed/movie-detailed.component';
import { ReleasedMovieCardComponent } from './movie/released-movie-card/released-movie-card.component';
import { ReleasedMovieListComponent } from './movie/released-movie-list/released-movie-list.component';
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
import { UnreleasedMoviesComponent } from './unreleased-movie/unreleased-movies/unreleased-movies.component';
import { FooterComponent } from './footer/footer.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

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
    MovieDetailedComponent,
    UnreleasedMoviesComponent,
    UnreleasedTrailerCardComponent,
    FooterComponent,
    SignupPageComponent,
    SigninFormComponent,
    SignupFormComponent
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
    MovieDetailedResolver,
    UnreleasedMovieDetailedResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
