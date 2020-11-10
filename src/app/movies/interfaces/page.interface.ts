import * as MovieModule from './';

export interface Page {
  page: number;
  results: MovieModule.Movies[];
  total_results: number;
  total_pages: number;
}
