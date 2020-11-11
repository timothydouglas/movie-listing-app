import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListingComponent } from './listing.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

describe( 'ListComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;
  let store: MockStore<fromStore.AppState>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [
        ListingComponent,
      ],
      imports: [
        ScrollingModule,
      ],
      providers: [
        provideMockStore(),
      ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( ListingComponent );
    store = TestBed.get( Store );

    store.overrideSelector( fromStore.getMoviesLoading, false );
    store.overrideSelector( fromStore.getMovies, [] );
    store.overrideSelector( fromStore.selectPage, 0 );

    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
