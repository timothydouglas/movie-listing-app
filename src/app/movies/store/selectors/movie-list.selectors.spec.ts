import * as selectors from '../selectors';
import { initialState } from '../reducers';
import { generateItems, TEST_PAGE_SIZE } from '../../../../../mocks';

describe('Movie List Selectors', () => {

  it('should get movie list items', () => {
    const before = selectors.getMovies.projector(initialState);
    expect(before.length).toBe(0);
    const newState: any = {
      ...initialState,
      items: generateItems(TEST_PAGE_SIZE),
    };
    const after = selectors.getMovies.projector(newState);
    expect(after.length).toBe(TEST_PAGE_SIZE);
  });

  it('should select page', () => {
    const before = selectors.selectPage.projector(initialState);
    expect(before).toBe(0);
    const newState = {
      ...initialState,
      page: 1,
    };
    const after = selectors.selectPage.projector(newState);
    expect(after).toBe(1);
  });

  it('should return loading status', () => {
    const before = selectors.getMoviesLoading.projector(initialState);
    expect(before).toBeFalsy();
    const newState = {
      ...initialState,
      isLoading: true,
    };
    const after = selectors.getMoviesLoading.projector(newState);
    expect(after).toBeTruthy();
  });

  it('should return loaded status', () => {
    const before = selectors.getMoviesLoaded.projector(initialState);
    expect(before).toBeFalsy();
    const newState = {
      ...initialState,
      loaded: true,
    };
    const after = selectors.getMoviesLoaded.projector(newState);
    expect(after).toBeTruthy();
  });

});
