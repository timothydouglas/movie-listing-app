import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Movie } from '../interfaces';
import { MovieService } from './movie.service';

describe( 'MovieService', () => {
  let httpTestingController: HttpTestingController;
  let movieService: MovieService;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    } );

    movieService = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController);
  } );

  it( 'should be created', inject( [MovieService], ( service: MovieService ) => {
    expect( service ).toBeTruthy();
  } ) );

  it('can test HttpClient.get attendees', () => {
    const testMovies: Movie[] = [
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

    movieService.getMovies().subscribe();
    const req = httpTestingController.expectOne('/api/attendees');
    expect(req.request.method).toEqual('GET');
    req.flush(testMovies);

    httpTestingController.verify();
  });
} );

