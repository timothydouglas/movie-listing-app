import { createSelector } from '@ngrx/store';
import * as fromMovieList from '../reducers/movie-list.reducer';
import { AppState, getMovieListState } from '../reducers';

export const getMoviesState = createSelector(
  getMovieListState,
  ( state: AppState ) => state.movies
);

export const selectMovies = createSelector(
  getMoviesState,
  fromMovieList.getMovies
);

export const selectPage = createSelector(
  getMoviesState,
  ( { page } ) => page
);

export const getMoviesLoaded = createSelector(
  getMoviesState,
  fromMovieList.getMoviesLoaded
);

export const getMoviesLoading = createSelector(
  getMoviesState,
  fromMovieList.getMoviesLoading
);
