
import { Action, createReducer, createSelector, on, createFeatureSelector } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as AdmissionActions from './admission.actions';

export interface UserState extends User {
  isLoading: boolean;
  error: any;
}

export const initialAdmissionState: UserState = {
    cpf: '',
    name: '',
    status: '',
    account: [],
    isLoading: false,
    error: ''
}

export const _admissionReducer = createReducer(
  initialAdmissionState,
  on(AdmissionActions.consultUser, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(AdmissionActions.consultUserSuccess, (state, { user }) => ({
    ...state,
    ...user,
    isLoading: false,
    error: null,
  })),
  on(AdmissionActions.consultUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(AdmissionActions.duplicateAccountSuccess, (state, { user }) => ({
    ...state,
    ...user,
    isLoading: false,
    error: true,
  })),
  on(AdmissionActions.duplicateAccountFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
);

export function userReducer(state = initialAdmissionState, action: Action) {
  return _admissionReducer(state, action);
}

const getAccountState = createFeatureSelector<UserState>(
  'user'
)

export const getAccount = createSelector(
  getAccountState,
  (state: UserState) => state
)
