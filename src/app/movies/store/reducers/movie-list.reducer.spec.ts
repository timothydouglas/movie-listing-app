import { reducer, initialState } from './movie-list.reducer';
import * as actions from '../actions';
import { generateItems } from '../../../../../mocks';

describe( 'Movie List Reducers', () => {

  it( 'should load next page', () => {
    const expectedState = {
      ...initialState,
      isLoading: true,
      page: initialState.page + 1,
      loaded: false,
    };
    expect( reducer( initialState, actions.loadNextPage ) ).toEqual( jasmine.objectContaining( expectedState ) );
  } );

  it( 'should not load page and get failed status', () => {
    const expectedState = {
      ...initialState,
      isLoading: false,
      loaded: false,
    };
    expect( reducer( initialState, actions.loadMoviesFail ) ).toEqual( jasmine.objectContaining( expectedState ) );
  } );

  it( 'should load and append items', () => {
    const items1 = generateItems( 10, 0 );
    const expectedState = {
      ...initialState,
      loading: false,
      isLoaded: true,
      movies: items1,
    };
    expect( reducer( initialState, actions.loadMoviesSuccess( { movies: items1 } ) ) ).toEqual( jasmine.objectContaining( expectedState ) );

    const initialState2 = expectedState;
    const items2 = generateItems( 10, 10 );
    const combinedItems = items1.concat( items2 );
    const expectedState2 = {
      ...initialState,
      loading: false,
      isLoaded: true,
      movies: combinedItems
    };
    // tslint:disable-next-line:max-line-length
    expect( reducer( initialState2, actions.loadMoviesSuccess( { movies: items2 } ) ) ).toEqual( jasmine.objectContaining( expectedState2 ) );
  } );
} );
