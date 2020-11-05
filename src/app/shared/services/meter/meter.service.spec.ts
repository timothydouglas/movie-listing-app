import { TestBed, inject } from '@angular/core/testing';
import { MeterService } from './meter.service';
import { mockMeterService } from '../../../../../mocks';

describe( 'ErrorMessageService', () => {
  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [],
      declarations: [],
      providers: [
        { provide: MeterService, useClass: mockMeterService }
      ],
      schemas: []
    } );
  } );

  it( 'should be truthy', inject( [MeterService], ( service: MeterService ) => {
    expect( service ).toBeTruthy();
  } ) );

} );
