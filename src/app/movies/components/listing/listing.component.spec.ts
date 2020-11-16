import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingComponent } from './listing.component';

let component: ListingComponent;
let fixture: ComponentFixture<ListingComponent>;

describe( 'ListingComponent', () => {

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [],
      declarations: [
        ListingComponent
      ],
    } );

    fixture = TestBed.overrideComponent( ListingComponent, {
      set: {
        template: ''
      }
    } ).createComponent( ListingComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should call be truthy', () => {
    expect( component ).toBeTruthy();
  } );
} );

