import { createAction, props } from '@ngrx/store';
import { Movies } from '../../interfaces';

export const loadNextPage = createAction( '[Movies/API] Load Next Page' );

export const loadMovies = createAction(
  '[Movies/API] Load Movies'
);

export const loadMoviesFail = createAction(
  '[Movies/API] Load Movies Fail',
  props<{ payload: {} }>()
);

export const loadMoviesSuccess = createAction(
  '[Movies/API] Load Movies Success',
  props<{ movies: Movies[] }>()
);

