import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${environment.apiEndpoint}movie/popular?api_key=${environment.apiKey}`).pipe(map(
      resp => (<any>resp).results));
  }
}
