import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MeterComponent } from './meter.component';
import { MeterService } from '../../services/meter/meter.service';
import { of } from 'rxjs';
import { mockMeterService } from '../../../../../mocks';

let component: MeterComponent;
let fixture: ComponentFixture<MeterComponent>;

const createComponents = () => {
  fixture = TestBed.createComponent(MeterComponent);
  component = fixture.componentInstance;
};

describe( 'MeterComponent', () => {

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [],
      declarations: [
        MeterComponent
      ],
      providers: [
        { provide: MeterService, useClass: mockMeterService }
      ]
    } );
  } );

  // describe( 'ngOnInit', () => {
  //   it( 'should set component.meter based on MeterService state', async(inject( [MeterService], ( service: MeterService ) => {
  //     spyOn( service, 'launch' ).and.returnValue( of( true ) );
  //     createComponents();
  //     component.ngOnInit();
  //     expect(mockMeterService.eventSubject$['subscribe']).toHaveBeenCalled();
  //     expect( component.meter ).toEqual( true );
  //   } ) ));
  // } );
} );
