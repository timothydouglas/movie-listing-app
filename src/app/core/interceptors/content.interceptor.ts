import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MeterService } from '../../shared/services/meter/meter.service';

@Injectable()
export class ContentInterceptor implements HttpInterceptor {
  constructor(
    private meter: MeterService
  ) {
  }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.meter.launch( true );
    // add content-type header
    request = request.clone( {
      setHeaders: {
        'Content-Type': 'application/json'
      }
    } );

    return next.handle( request ).pipe( finalize( () => {
      this.meter.launch( false );
    } ) ) as any;
  }
}
