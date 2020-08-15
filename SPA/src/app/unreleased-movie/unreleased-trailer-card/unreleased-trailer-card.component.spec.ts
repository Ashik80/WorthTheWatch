/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnreleasedTrailerCardComponent } from './unreleased-trailer-card.component';

describe('UnreleasedTrailerCardComponent', () => {
  let component: UnreleasedTrailerCardComponent;
  let fixture: ComponentFixture<UnreleasedTrailerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreleasedTrailerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreleasedTrailerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
