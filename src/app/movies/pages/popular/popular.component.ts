import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { MovieService } from '../../services/movie.service';

@Component( {
  selector: 'app-popular-movies',
  templateUrl: './popular.component.html'
} )
export class PopularComponent {

  constructor( private store: Store<fromStore.AppState>,
               public movieService: MovieService) {
    this.loadNextPage();
  }

  loadNextPage() {
    this.movieService.dispatchLoadMovies( this.store );
  }
}

