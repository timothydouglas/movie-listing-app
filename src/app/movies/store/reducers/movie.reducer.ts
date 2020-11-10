// import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
// import { createReducer, on } from '@ngrx/store';
//
// import { Movie } from '../../interfaces';
// import * as MovieActions from '../actions/movie.actions';
//
// export interface MovieState {
//   movies: { [id: number]: Movie };
//   isLoading: boolean;
// }
//
// export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();
//
// export const initialState: MovieState = adapter.getInitialState( {
//   movies: {},
//   isLoading: false
// } );
//
// // tslint:disable-next-line:no-empty-interface
// export interface State extends MovieState {
// }
//
// // export const reducer = createReducer(
// //   initialState,
// //   on( MovieActions.loadMovies, ( state: MovieState, { movies } ) => ({
// //     ...state,
// //     isLoading: false
// //   }) )
// // );
//
//
