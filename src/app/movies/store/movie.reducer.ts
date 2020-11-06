import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Movie } from '../interfaces';
import * as MovieActions from './movie.actions';

export const movieFeatureKey = 'movies';

export interface MovieState extends EntityState<Movie> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialState: MovieState = adapter.getInitialState({
  isLoading: true,
  error: null
});

export const reducer = createReducer(
  initialState,
  on(MovieActions.loadMovies,
    (state, action) => adapter.setAll(action.movies, {
      ...state,
      isLoading: false
    })
  ),
  on(MovieActions.requestLoadMovies,
    (state, action) => adapter.setAll([], {
      ...state,
      isLoading: true
    })
  )
);

export const {
  selectAll,
} = adapter.getSelectors();

export const selectIsLoading = (state: MovieState) => state.isLoading;
export const selectError = (state: MovieState) => state.error;
