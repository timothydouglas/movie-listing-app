import { ActionCreator, createAction, props } from '@ngrx/store';
import { Movies } from '../../interfaces';

export const loadNextPage: ActionCreator = createAction( '[Movies/API] Load Next Page' );

export const loadMovies: ActionCreator = createAction(
  '[Movies/API] Load Movies'
);

export const loadMoviesFail: ActionCreator = createAction(
  '[Movies/API] Load Movies Fail',
  props<{ payload: {} }>()
);

export const loadMoviesSuccess: ActionCreator = createAction(
  '[Movies/API] Load Movies Success',
  props<{ movies: Movies[] }>()
);

