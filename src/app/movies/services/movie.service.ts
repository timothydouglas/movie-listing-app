import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as selectors from '../store/selectors';
import * as actions from '../store/actions';
import { environment } from '../../../environments/environment';
import { Movie, MovieDetails, Movies, Page } from '../interfaces';

@Injectable( {
  providedIn: 'root'
} )
export class MovieService {

  isLoading$: Observable<boolean>;
  movie$: Observable<MovieDetails>;
  movies$: Observable<Movies[]>;

  constructor( private http: HttpClient ) {
  }

  getPage( page = 0 ): Observable<Page> {
    return this.http.get<Page>( `${ environment.apiEndpoint }movie/popular?api_key=${ environment.apiKey }&page=${ page }` );
  }

  getMovies( page ): Observable<Movies[]> {
    return this.http.get<Movie[]>( `${ environment.apiEndpoint }movie/popular?api_key=${ environment.apiKey }&page=${ page }` ).pipe(
      map( resp => (<any>resp).results ) );
  }

  getMovie( id ): Observable<Movie> {
    return this.http.get<Movie>( `${ environment.apiEndpoint }movie/${ id }?api_key=${ environment.apiKey }` );
  }

  dispatchLoadMovies( store: Store ) {
    this.movies$ = store.pipe( select( selectors.getMovies ) );
    this.isLoading$ = store.pipe( select( selectors.getMoviesLoading ) );
    store.dispatch( actions.loadNextPage() );
  }

  dispatchLoadMovie( store: Store ) {
    this.movie$ = store.pipe( select( selectors.getMovieDetails ) );
    store.dispatch( actions.loadMovie() );
  }
}
