import { createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromMovieList from '../reducers/movie-list.reducer';
import { AppState, getMovieListState } from '../reducers';
import { Movies } from '../../interfaces';

export const getMoviesState: MemoizedSelector<object, fromMovieList.MovieListState> = createSelector(
  getMovieListState,
  ( state: AppState ) => state.movies
);

export const getMovies: MemoizedSelector<object, Movies[]> = createSelector(
  getMoviesState,
  fromMovieList.getMovies
);

export const selectPage: MemoizedSelector<object, number> = createSelector(
  getMoviesState,
  ( { page } ) => page
);

export const getMoviesLoaded: MemoizedSelector<object, boolean> = createSelector(
  getMoviesState,
  fromMovieList.getMoviesLoaded
);

export const getMoviesLoading: MemoizedSelector<object, boolean> = createSelector(
  getMoviesState,
  fromMovieList.getMoviesLoading
);
