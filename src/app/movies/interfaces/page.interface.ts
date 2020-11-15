import { Movies } from './';

export interface Page {
  page: number;
  results: Movies[];
  total_results: number;
  total_pages: number;
}
