// import { movies } from './products.selectors';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, debounceTime, delay, tap } from 'rxjs/operators';

import { MovieService } from '../services/movie.service';
import { loadMovies, requestLoadMovies } from './movie.actions';

@Injectable()
export class MovieEffects {

  constructor(private actions$: Actions, private movieService: MovieService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLoadMovies),
      switchMap(action =>
        this.movieService.getMovies().pipe(
          delay(3000),
          map(data => loadMovies({movies: data}))
        )),
      tap(console.log)
    )
  );
}
