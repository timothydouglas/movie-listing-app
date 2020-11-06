import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces';
import { Store } from '@ngrx/store';

import * as fromActions from '../../store/movie.actions';
import * as fromStore from '../../store/movie.reducer';
import * as fromSelector from '../../store/movie.selectors';

@Component( {
  selector: 'app-home',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
} )
export class ListingComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  movies$: Observable<Movie[]>;


  constructor( private store: Store<fromStore.MovieState>) {}

  ngOnInit() {
    // this.getMovies();
    // this.movieService.getMovies()
    // this.store.dispatch(GetMovies({ movies:  } );
    this.store.dispatch(fromActions.requestLoadMovies());
    this.movies$ = this.store.select(fromSelector.movies);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.error$ = this.store.select(fromSelector.error);

    console.log(this.movies$);
  }

}
