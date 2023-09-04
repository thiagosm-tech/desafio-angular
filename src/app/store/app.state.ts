import { ActionReducerMap } from '@ngrx/store';

import { AdmissionEffects } from './admission/admission.effects';
import { UserState, userReducer } from './admission/admission.reducer'

export interface AppState {
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
};

export const effects = [
  AdmissionEffects
]
