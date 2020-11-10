import { createReducer, on } from '@ngrx/store';

import { MovieDetails } from '../../interfaces';
import * as MovieActions from '../actions/movie.actions';

export interface MovieState {
  movie: MovieDetails;
  isLoading: boolean;
  loaded: boolean;
}

export const initialMovieState: MovieState = {
  movie: {} as MovieDetails,
  isLoading: false,
  loaded: false
};


export const reducer = createReducer(
  initialMovieState,
  on( MovieActions.loadMovie, ( state: MovieState ) => ({
    ...state,
    isLoading: true,
    loaded: false
  }) ),
  on( MovieActions.loadMovieSuccess, ( state: MovieState, { movie } ) => ({
    ...state,
    isLoading: false,
    loaded: true,
    movie: state.movie
  }) ),
  on( MovieActions.loadMovieFail, ( state: MovieState ) => ({
    ...state,
    isLoading: false,
    loaded: false,
  }) )
);

export const getMovieLoading = ( state: MovieState ) => state.isLoading;
export const getMovieLoaded = ( state: MovieState ) => state.loaded;
export const getMovie = ( state: MovieState ) => state.movie;


