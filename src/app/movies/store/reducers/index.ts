import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMovieList from './movie-list.reducer';
import * as fromMovie from './movie.reducer';

export const featureKey = 'movies';

export interface AppState {
  movies: fromMovieList.MovieListState;
  movie: fromMovie.MovieState;
}

export const reducers: ActionReducerMap<AppState> = {
  movies: fromMovieList.movieListReducer,
  movie: fromMovie.movieReducer
};

export const getMovieListState = createFeatureSelector<AppState>( featureKey );
export const getMovieDetailsState = createFeatureSelector<AppState>( featureKey );








