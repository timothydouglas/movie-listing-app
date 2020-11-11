import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie, Movies, Page } from '../interfaces';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getPage(page = 0): Observable<Page> {
    return this.http.get<Page>(`${environment.apiEndpoint}movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }

  getMovies(page): Observable<Movies[]> {
    return this.http.get<Movie[]>(`${environment.apiEndpoint}movie/popular?api_key=${environment.apiKey}&page=${page}`).pipe(
      map( resp => (<any>resp).results));
  }

  getMovie(id): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiEndpoint}movie/${id}?api_key=${environment.apiKey}`);
  }
}
