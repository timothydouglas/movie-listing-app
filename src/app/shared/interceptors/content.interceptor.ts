import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class ContentInterceptor implements HttpInterceptor {
  constructor() {}

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    // add content-type header
    const req = request.clone( {
      setHeaders: {
        'Content-Type': 'application/json'
      }
    } );

    return next.handle( req ).pipe(
      catchError( ( error ) => {
        return throwError( error );
      } ) ).pipe(
      finalize( () => {
    } ) ) as any;
  }
}
