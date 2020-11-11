import { Movie, MovieDetails, Movies } from './src/app/movies/interfaces';
import { EMPTY, Observable } from 'rxjs';

export const generateItems = (length: number, offset: number = 1): Movies[] => Array.from(
  { length }, (_, i) => ({
    adult: 'test',
    backdrop_path: 'test',
    genre_ids: (i + offset),
    id: (i + offset),
    original_language: 'test',
    overview: 'test',
    popularity: (i + offset),
    poster_path: 'test',
    release_date: (i + offset),
    title: 'test',
    video: 'test',
    vote_average: (i + offset),
    vote_count: (i + offset)
  })
);

export const generateItem = (): MovieDetails => {
  return {
    adult: 'test',
    backdrop_path: 'test',
    belongs_to_collection: {},
    budget: 1,
    genres: [
      {
        id: 1,
        name: 'test',
      },
      {
        id: 2,
        name: 'test',
      },
      {
        id: 3,
        name: 'test',
      }
    ],
    homepage: 'test',
    id: 1,
    imdb_id: 'test',
    original_language: 'test',
    original_title: 'test',
    overview: 'test',
    popularity: 1,
    poster_path: 'test',
    production_companies: [
      {
        name: 'test',
        id: 1,
        logo_path: 'test',
        origin_country: 'test',
      },
      {
        name: 'test',
        id: 2,
        logo_path: 'test',
        origin_country: 'test',
      }
    ],
    production_countries: [
      {
        iso_3166_1: 'test',
        name: 'test'
      },
      {
        iso_3166_1: 'test',
        name: 'test'
      }
    ],
    release_date: 'test',
    revenue: 1,
    runtime: 1,
    spoken_languages: [
      {
        iso_639_1: 'test',
        name: 'test'
      },
      {
        iso_639_1: 'test',
        name: 'test'
      }
    ],
    status: 'test',
    tagline: 'test',
    title: 'test',
    video: true,
    vote_average: 1,
    vote_count: 1
  };
};

export const TEST_PAGE_SIZE = 10;

export class mockMovieService {
  movie$: Observable<Movie> = EMPTY;

  getMovie(id: number): Observable<Movie> {
    return this.movie$;
  }
}
