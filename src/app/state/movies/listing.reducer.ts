import { createReducer, on } from '@ngrx/store';
import { GetMovies } from './actions';

export interface MovieState {
  movies: any[];
}

const initialMovieState: MovieState = {
  movies: []
};

const MovieReducer = createReducer(
  initialMovieState,
  on( GetMovies, ( state: MovieState, { movies } ) => ({
    ...state,
    movies,
  }) )
);

export interface AppState {
  listing: MovieState;
}

export const AppReducers = {
  listing: MovieReducer,
};
