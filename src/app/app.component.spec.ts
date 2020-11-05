import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe( 'AppComponent', () => {

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [],
      declarations: [
        AppComponent
      ],
    } );

    fixture = TestBed.overrideComponent( AppComponent, {
      set: {
        template: ''
      }
    } ).createComponent( AppComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should call be truthy', () => {
    expect( component ).toBeTruthy();
  } );
} );
