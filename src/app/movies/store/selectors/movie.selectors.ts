import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromMovie from '../reducers/movie.reducer';

export const getMovieState = createSelector(
  fromFeature.getMovieDetailsState,
  (state: fromFeature.AppState) => state.movie
);

export const getSelectedMovie = createSelector(
  getMovieState,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.movieId];
  }
);

export const getMovieLoaded = createSelector(
  getMovieState,
  fromMovie.getMovieLoaded
);

export const getMovieLoading = createSelector(
  getMovieState,
  fromMovie.getMovieLoading
);

export const getMovieDetails = createSelector(
  getMovieState,
  fromMovie.getMovie
);
