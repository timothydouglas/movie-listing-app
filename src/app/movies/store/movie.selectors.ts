import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './movie.reducer';

const moviesSelector = createFeatureSelector<fromStore.MovieState>(fromStore.movieFeatureKey);

export const isLoading = createSelector(moviesSelector, fromStore.selectIsLoading);
export const movies = createSelector(moviesSelector, fromStore.selectAll);
export const error = createSelector(moviesSelector, fromStore.selectError);
