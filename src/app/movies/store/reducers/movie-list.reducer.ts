import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import { Movies } from '../../interfaces';
import * as MovieActions from '../actions/movie-list.actions';

export interface MovieListState {
  movies: Movies[];
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

export const movieListReducer: ActionReducer<{page: number, isLoading: boolean, loaded: boolean, movies: Movies[]}> = createReducer(
  initialState,
  on( MovieActions.loadMovies, ( state: MovieListState ) => ({
    ...state,
    isLoading: true,
    loaded: false,
  }) ),
  on( MovieActions.loadMoviesSuccess, ( state: MovieListState, { movies } ) => ({
    ...state,
    movies: state.movies.length < 100 ? [...state.movies, ...movies] : state.movies,
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
  }) )
);

export function reducer(state: MovieListState, action: Action): MovieListState {
  return movieListReducer(state, action);
}

export const getMoviesLoading = (state: MovieListState): boolean => state.isLoading;
export const getMoviesLoaded = (state: MovieListState): boolean => state.loaded;
export const getMovies = (state: MovieListState): Movies[] => state.movies;


