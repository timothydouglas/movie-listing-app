import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Movie } from '../interfaces';

export const requestLoadMovies = createAction(
  '[Movie/API] Request Load Movies'
);

export const loadMovies = createAction(
  '[Movie/API] Load Movies',
  props<{ movies: Movie[] }>()
);
