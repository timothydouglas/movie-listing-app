import { createAction, props } from '@ngrx/store';
import { MovieDetails } from '../../interfaces';

export const loadMovie = createAction(
  '[Movies/API] Load Movie'
);

export const loadMovieFail = createAction(
  '[Movies/API] Load Movie Fail',
  props<{ payload: {} }>()
);

export const loadMovieSuccess = createAction(
  '[Movies/API] Load Movie Success',
  props<{ movie: MovieDetails }>()
);
