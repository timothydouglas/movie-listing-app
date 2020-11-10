import { Store, Action, createFeatureSelector, select } from '@ngrx/store';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { switchMap, map, tap, withLatestFrom, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import * as fromStore from '../../store/';
import { ROUTER_NAVIGATED, RouterReducerState } from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';
import { of } from 'rxjs';

export const getRouterState = createFeatureSelector<RouterReducerState>( 'router' );

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors( getRouterState );

@Injectable()
export class MovieEffects implements OnInitEffects {
  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private store: Store<fromStore.AppState>
  ) {}

  movies$ = this.store.pipe( select( fromStore.selectMovies ) );
  page$ = this.store.pipe( select( fromStore.selectPage ) );

  loadNextPage$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromStore.loadNextPage ),
      withLatestFrom( this.page$ ),
      switchMap( ( [_, page] ) => this.movieService.getPage( page ).pipe(
        map( result => fromStore.loadMoviesSuccess( { movies: result.results } ) ),
        catchError( error => of( fromStore.loadMoviesFail( error ) )
        ) ) ),
      tap( console.log )
    )
  );

  // loadMovie$ = createEffect( () =>
  //   this.actions$.pipe(
  //     ofType( ROUTER_NAVIGATED ),
  //     switchMap( <any>this.store.select( selectRouteParam( 'id' )  ) ),
  //       map( ( id: number ) => actions.loadMovie( { id } ) ),
  //     ), { dispatch: true }
  // );

  ngrxOnInitEffects(): Action {
    return fromStore.loadNextPage();
  }
}
