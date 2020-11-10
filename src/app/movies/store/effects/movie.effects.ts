import { Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap, withLatestFrom, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MovieService } from '../../services/movie.service';

import * as fromActions from '../actions/';
import * as fromReducers from '../reducers';
import * as fromSelectors from '../selectors';
import * as fromRoot from '../../../store';
import { of } from 'rxjs';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private store: Store<fromReducers.AppState>
  ) {}

  page$ = this.store.pipe( select( fromSelectors.selectPage ) );

  loadNextPage$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromActions.loadNextPage ),
      withLatestFrom( this.page$ ),
      switchMap( ( [_, page] ) => this.movieService.getPage( page ).pipe(
        map( result => fromActions.loadMoviesSuccess( { movies: result.results } ) ),
        catchError( error => of( fromActions.loadMoviesFail( error ) )
        ) ) ),
      tap( console.log )
    )
  );

  loveMovieDetails$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromActions.loadMovie ),
      withLatestFrom(
        this.store.select( fromRoot.getRouterState ),
        ( action, router ) => ({
          id: router.state.params.movieId
        })
      ),
      switchMap( movieId => this.movieService.getMovie( movieId.id ).pipe(
        map( movie => fromActions.loadMovieSuccess( movie ) ),
        catchError( error => of( fromActions.loadMovieFail( error ) )
        ) ) ),
      tap( console.log )
    )
  );
}
