import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromMovieList from './movie-list.reducer';

export const featureKey = 'movies';

export interface AppState {
  movies: fromMovieList.MovieListState;
}

export const reducers: ActionReducerMap<AppState> = {
  movies: fromMovieList.movieReducer,
};

export const getMovieListState = createFeatureSelector<AppState>( 'movies' );

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






