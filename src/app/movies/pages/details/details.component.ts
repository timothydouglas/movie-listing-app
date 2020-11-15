import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {

  constructor(private store: Store<fromStore.AppState>,
              public movieService: MovieService) {
    this.movieService.dispatchLoadMovie(this.store);
  }
}
