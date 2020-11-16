import * as selectors from '../selectors';
import { initialMovieState } from '../reducers/movie.reducer';
import { generateItem, TEST_PAGE_SIZE } from '../../../../../mocks';

describe('Movie Selectors', () => {

  it('should get movie details', () => {
    const before = selectors.getMovieDetails.projector(initialMovieState);
    expect(before).toBe(before);
    const newState: any = {
      ...initialMovieState,
      items: generateItem(),
    };
    const after = selectors.getMovieDetails.projector(newState);
    expect(after).toBe(after);
  });

  it('should get loading status', () => {
    const before = selectors.getMovieLoading.projector(initialMovieState);
    expect(before).toBeFalsy();
    const newState = {
      ...initialMovieState,
      isLoading: true,
    };
    const after = selectors.getMovieLoading.projector(newState);
    expect(after).toBeTruthy();
  });

  it('should get loaded status', () => {
    const before = selectors.getMovieLoaded.projector(initialMovieState);
    expect(before).toBeFalsy();
    const newState = {
      ...initialMovieState,
      loaded: true,
    };
    const after = selectors.getMovieLoaded.projector(newState);
    expect(after).toBeTruthy();
  });

});
