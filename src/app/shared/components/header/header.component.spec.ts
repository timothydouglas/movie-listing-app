import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

let component: HeaderComponent;
let fixture: ComponentFixture<HeaderComponent>;

describe( 'HeaderComponent', () => {

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [],
      declarations: [
        HeaderComponent
      ],
    } );

    fixture = TestBed.overrideComponent( HeaderComponent, {
      set: {
        template: ''
      }
    } ).createComponent( HeaderComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should call be truthy', () => {
    expect( component ).toBeTruthy();
  } );
} );
