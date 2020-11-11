import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import { MovieDetails } from '../../interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  movie$: Observable<MovieDetails> = this.store.pipe( select( fromStore.getMovieDetails ) );

  constructor(private store: Store<fromStore.AppState>) {
    this.store.dispatch(fromStore.loadMovie());
  }
}
