import { ActionCreator, createAction, props } from '@ngrx/store';
import { MovieDetails } from '../../interfaces';

export const loadMovie: ActionCreator = createAction(
  '[Movies/API] Load Movie'
);

export const loadMovieFail: ActionCreator = createAction(
  '[Movies/API] Load Movie Fail',
  props<{ payload: {} }>()
);

export const loadMovieSuccess: ActionCreator = createAction(
  '[Movies/API] Load Movie Success',
  props<{ movie: MovieDetails }>()
);
