import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromMovie from '../reducers/movie.reducer';
import { MovieDetails } from '../../interfaces';

export const getMovieState: MemoizedSelector<object, fromMovie.MovieState> = createSelector(
  fromFeature.getMovieDetailsState,
  (state: fromFeature.AppState) => state.movie
);

export const getSelectedMovie: MemoizedSelector<object, any> = createSelector(
  getMovieState,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.movieId];
  }
);

export const getMovieLoaded: MemoizedSelector<object, boolean> = createSelector(
  getMovieState,
  fromMovie.getMovieLoaded
);

export const getMovieLoading: MemoizedSelector<object, boolean> = createSelector(
  getMovieState,
  fromMovie.getMovieLoading
);

export const getMovieDetails: MemoizedSelector<object, MovieDetails> = createSelector(
  getMovieState,
  fromMovie.getMovie
);
