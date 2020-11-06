import { createAction, props } from '@ngrx/store';

export const GetMovies = createAction(
  'Get Movies',
  props<{ movies: any[] }>()
);
