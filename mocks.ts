export class mockMeterService {
  public meterStateSource = new Subject();
  meterSource = this.meterStateSource.asObservable();

  public launch( status: boolean ) {
    this.meterStateSource.next( status );
  }
}

import { Subject } from 'rxjs';
