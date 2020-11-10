import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fromStore from '../store/reducers/movie-list.reducer';
import { catchError, switchMap } from 'rxjs/operators';


@Injectable()
export class MoviesGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.MovieListState>
  ) {}

  canActivate(): Observable<boolean> {
    return;
    // return fromStore.checkStore( this.store )
  //     .pipe(
  //       switchMap( () => of( true ) ),
  //       catchError( () => of( false ) )
  //     );
  }
}

