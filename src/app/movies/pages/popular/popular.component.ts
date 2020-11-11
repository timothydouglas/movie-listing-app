import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Movies } from '../../interfaces';

@Component( {
  selector: 'app-popular-movies',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
} )
export class PopularComponent {

  movies$: Observable<Movies[]> = this.store.pipe( select( fromStore.getMovies ) );
  isLoading$: Observable<boolean> = this.store.pipe( select( fromStore.getMoviesLoading ) );

  constructor( private store: Store<fromStore.AppState> ) {
    this.loadNextPage();
  }

  loadNextPage() {
    this.store.dispatch( fromStore.loadNextPage() );
  }
}

