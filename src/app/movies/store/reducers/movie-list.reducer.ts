import { createReducer, on } from '@ngrx/store';

import { Movie } from '../../interfaces';
import * as MovieActions from '../actions/movie.actions';

export interface MovieListState {
  movies: Movie[];
  page: number;
  isLoading: boolean;
  loaded: boolean;
}

export const initialState: MovieListState = {
  movies: [],
  page: 0,
  isLoading: false,
  loaded: false,
};

export const movieReducer = createReducer(
  initialState,
  on( MovieActions.loadMovies, ( state: MovieListState ) => ({
    ...state,
    isLoading: true,
    loaded: false,
  }) ),
  on( MovieActions.loadMoviesSuccess, ( state: MovieListState, { movies } ) => ({
    ...state,
    movies: state.movies.concat( movies ),
    isLoading: false,
    loaded: true,
  }) ),
  on( MovieActions.loadMoviesFail, ( state: MovieListState ) => ({
    ...state,
    isLoading: false,
    loaded: false
  }) ),
  on( MovieActions.loadNextPage, ( state: MovieListState ) => ({
    ...state,
    page: state.page + 1,
    isLoading: true,
    loaded: false
  }) ),
);

export const getMoviesLoading = (state: MovieListState) => state.isLoading;
export const getMoviesLoaded = (state: MovieListState) => state.loaded;
export const getMovies = (state: MovieListState) => state.movies;


