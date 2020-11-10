import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularComponent } from './popular.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { MovieService } from '../../services/movie.service';

describe( 'ListingComponent', () => {
  let component: PopularComponent;
  let fixture: ComponentFixture<PopularComponent>;
  let service: MovieService;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      providers: [
        { provide: HttpClient, useValue: null },
        {
          provide: MovieService,
          useValue: {
            getMovies: () => {
            }
          }
        }
      ],
      declarations: [PopularComponent],
      schemas: [NO_ERRORS_SCHEMA]
    } ).compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( PopularComponent );
    component = fixture.componentInstance;
    service = TestBed.inject( MovieService );
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
      spyOn( service, 'getMovies' ).and.returnValue( () => of( fakeMovies ) );
      component.ngOnInit();
      component.movies$.subscribe( movies => {
        expect( movies ).toEqual( fakeMovies );
      } );
    } );
  } );
} );
