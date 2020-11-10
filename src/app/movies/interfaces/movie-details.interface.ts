import * as fromMovies from './';

export interface MovieDetails {
  adult: string;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: fromMovies.Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: fromMovies.ProductionCompanies[];
  production_countries: fromMovies.ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: fromMovies.SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
