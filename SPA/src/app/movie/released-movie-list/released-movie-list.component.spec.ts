/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReleasedMovieListComponent } from './released-movie-list.component';

describe('ReleasedMovieListComponent', () => {
  let component: ReleasedMovieListComponent;
  let fixture: ComponentFixture<ReleasedMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasedMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasedMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
