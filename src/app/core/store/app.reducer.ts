import { createReducer } from '@ngrx/store';


export const appFeatureKey = 'app';

export interface AppState {
  loggedUser: string;
}

export const initialState: AppState = {
  loggedUser: ''
};

export const AppReducer = createReducer(
  initialState,
);
