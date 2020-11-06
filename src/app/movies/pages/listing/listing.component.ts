import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces';
import { Store } from '@ngrx/store';

@Component( {
  selector: 'app-home',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
} )
export class ListingComponent implements OnInit {

  movies$: Observable<Movie[]> = this.store.select(state => state.movies);

  constructor( private store: Store<{ movies: Movie[] }>,
               private movieService: MoviesService ) {
  }

  ngOnInit() {
    // this.getMovies();
    this.store.dispatch({ type: '[Movies Page] Load Movies' });
  }

  getMovies() {
    // this.movies$ = this.movieService.getMovies();

  }

}
