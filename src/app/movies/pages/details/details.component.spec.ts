import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DetailsComponent } from './details.component';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

describe( 'ListComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let store: MockStore<fromStore.AppState>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [
        DetailsComponent,
      ],
      providers: [
        provideMockStore(),
      ]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( DetailsComponent );
    store = TestBed.get( Store );

    store.overrideSelector( fromStore.getMovieLoading, false );
    store.overrideSelector( fromStore.getMovieDetails, {} as any );
    store.overrideSelector( fromStore.getSelectedMovie, 123456 );

    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );


