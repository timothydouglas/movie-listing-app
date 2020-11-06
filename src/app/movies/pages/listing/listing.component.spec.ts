import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingComponent } from './listing.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { MoviesService } from '../../services/movies.service';

describe( 'ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;
  let service: MoviesService;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      providers: [
        { provide: HttpClient, useValue: null },
        {
          provide: MoviesService,
          useValue: {
            getMovies: () => {
            }
          }
        }
      ],
      declarations: [ListingComponent],
      schemas: [NO_ERRORS_SCHEMA]
    } ).compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( ListingComponent );
    component = fixture.componentInstance;
    service = TestBed.inject( MoviesService );
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );

  describe( 'getMovies()', () => {
    it( 'should have a list of attendees set', () => {
      const fakeMovies = [
        {
          adult: 'Test',
          backdrop_path: 'Test',
          genre_ids: 1,
          id: 1,
          original_language: 'Test',
          overview: 'Test',
          popularity: 1,
          poster_path: 'Test',
          release_date: 1,
          title: 'Test',
          video: 'Test',
          vote_average: 1,
          vote_count: 1,
        }
      ];

      // @ts-ignore
      spyOn( service, 'getMovies' ).and.returnValue( () => of( fakeAttendees ) );
      component.ngOnInit();
      component.movies$.subscribe( movies => {
        expect( movies ).toEqual( fakeMovies );
      } );
    } );
  } );
} );
