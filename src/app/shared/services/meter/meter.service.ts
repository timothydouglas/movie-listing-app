import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MeterService {

  public meter: Subject<boolean> = new Subject();

  public launch( status: boolean ) {
    this.meter.next( status );
  }
}

