import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

let component: DetailsComponent;
let fixture: ComponentFixture<DetailsComponent>;

describe( 'DetailsComponent', () => {

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [],
      declarations: [
        DetailsComponent
      ],
    } );

    fixture = TestBed.overrideComponent( DetailsComponent, {
      set: {
        template: ''
      }
    } ).createComponent( DetailsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should call be truthy', () => {
    expect( component ).toBeTruthy();
  } );
} );

