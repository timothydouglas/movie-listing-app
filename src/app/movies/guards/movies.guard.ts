// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Observable, of } from 'rxjs';
// import { switchMap, map, tap, withLatestFrom, catchError, filter, take } from 'rxjs/operators';
// import * as fromStore from '../store';
// import { Movies, Page } from '../interfaces';
// import { getMovies, selectPage } from '../store/selectors';
// import { loadNextPage } from '../store/actions';
// import { loadMoviesSuccess } from '../store';
//
//
// @Injectable()
// export class MoviesGuard implements CanActivate {
//   constructor(
//     private store: Store<fromStore.AppState>
//   ) {
//   }
//
//   canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
//     return this.getMovies().pipe(
//       switchMap( () => of( true ) ),
//       catchError( () => of( false ) )
//     );
//   }
//
//   private getMovies(): Observable<Movies[]> {
//     return this.store.select( getMovies ).pipe(
//       tap( ( movies: Movies[] ) => {
//         if ( !movies ) {
//           this.store.dispatch( loadNextPage );
//         }
//       } ),
//       filter( ( movies: Movies[] ) => !!movies ),
//       take( 1 ),
//     );
//   }
//
// }
