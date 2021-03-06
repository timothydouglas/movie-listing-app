import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import { MovieDetails } from '../../interfaces';
import * as MovieActions from '../actions/movie.actions';

export interface MovieState {
  movie: MovieDetails;
  isLoading: boolean;
  loaded: boolean;
}

export const initialMovieState: MovieState = {
  movie: {} as any as MovieDetails,
  isLoading: false,
  loaded: false
};

export const movieReducer: ActionReducer<{isLoading: boolean, loaded: boolean, movie: MovieDetails}> = createReducer(
  initialMovieState,
  on( MovieActions.loadMovie, ( state: MovieState ) => ({
    ...state,
    isLoading: true,
    loaded: false
  }) ),
  on( MovieActions.loadMovieSuccess, ( state: MovieState, { movie } ) => ({
    ...state,
    movie: movie,
    isLoading: false,
    loaded: true
  }) ),
  on( MovieActions.loadMovieFail, ( state: MovieState ) => ({
    ...state,
    isLoading: false,
    loaded: false,
  }) )
);

export function reducer(state: MovieState, action: Action): MovieState {
  return movieReducer(state, action);
}

export const getMovieLoading = ( state: MovieState ): boolean => state.isLoading;
export const getMovieLoaded = ( state: MovieState ): boolean => state.loaded;
export const getMovie = ( state: MovieState ): MovieDetails => state.movie;


