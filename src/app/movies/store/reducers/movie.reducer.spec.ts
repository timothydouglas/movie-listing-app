import { reducer, initialMovieState } from './movie.reducer';
import * as actions from '../actions';
import { generateItem } from '../../../../../mocks';

describe( 'Movie Details Reducers', () => {

  it( 'should load movie', () => {
    const expectedState = {
      ...initialMovieState,
      isLoading: true,
      loaded: false,
    };
    expect( reducer( initialMovieState, actions.loadMovie ) ).toEqual( jasmine.objectContaining( expectedState ) );
  } );

  it( 'should not load and get failed status', () => {
    const expectedState = {
      ...initialMovieState,
      isLoading: false,
      loaded: false,
    };
    expect( reducer( initialMovieState, actions.loadMovieFail ) ).toEqual( jasmine.objectContaining( expectedState ) );
  } );

  it( 'should load and get success status', () => {
    const item = generateItem();
    const expectedState = {
      ...initialMovieState,
      loading: false,
      isLoaded: true,
      movies: item,
    };
    // tslint:disable-next-line:max-line-length
    expect( reducer( initialMovieState, actions.loadMovieSuccess( { movie: item } ) ) ).toEqual( jasmine.objectContaining( expectedState ) );
  } );
} );
