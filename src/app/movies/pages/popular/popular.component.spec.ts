import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PopularComponent } from './popular.component';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

describe( 'ListComponent', () => {
  let component: PopularComponent;
  let fixture: ComponentFixture<PopularComponent>;
  let store: MockStore<fromStore.AppState>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [
        PopularComponent,
      ],
      imports: [
        ScrollingModule,
      ],
      providers: [
        provideMockStore(),
      ]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( PopularComponent );
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


