import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Movies } from '../interfaces';
import { MovieService } from './movie.service';
import { environment } from '../../../environments/environment';

describe( 'MovieService', () => {
  let httpTestingController: HttpTestingController;
  let movieService: MovieService;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    } );

    movieService = TestBed.inject( MovieService );
    httpTestingController = TestBed.inject( HttpTestingController );
  } );

  it( 'should be created', inject( [MovieService], ( service: MovieService ) => {
    expect( service ).toBeTruthy();
  } ) );

  it( 'can test HttpClient.get Movies', () => {
    const testMovies: Movies[] = [
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

    movieService.getMovies( 1 ).subscribe();
    const req = httpTestingController.expectOne( `${ environment.apiEndpoint }movie/popular?api_key=${ environment.apiKey }&page=1` );
    expect( req.request.method ).toEqual( 'GET' );
    req.flush( testMovies );

    httpTestingController.verify();
  } );
} );

