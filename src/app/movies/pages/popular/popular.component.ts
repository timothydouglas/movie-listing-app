import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces';

@Component( {
  selector: 'app-popular-movies',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
} )
export class PopularComponent {

  movies$: Observable<Movie[]> = this.store.pipe( select( fromStore.selectMovies ) );
  isLoading$: Observable<boolean> = this.store.pipe( select( fromStore.getMoviesLoading ) );

  constructor( private store: Store<fromStore.AppState> ) {}

  loadNextPage() {
    this.store.dispatch( fromStore.loadNextPage() );
  }
}

