
import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

enum Actions {
  consultUser = '[User] Consult CPF',
  consultUserSuccess = '[USer] Consult CPF Success',
  consultUserFailure = '[USer] Consult CPF Failure',

  DuplicateAccount = '[Account] Account Duplicate',
  DuplicateAccountSuccess = '[Account] Account Duplicate Success',
  DuplicateAccountFailure = '[Account] Account Duplicate Failure',
}

export const consultUser = createAction(Actions.consultUser, props<{ query: any }>());
export const consultUserSuccess = createAction(Actions.consultUserSuccess, props<{ user: User }>());
export const consultUserFailure = createAction(Actions.consultUserFailure, props<{ error: any }>());

export const duplicateAccount = createAction(Actions.DuplicateAccount, props<{ query: any }>());
export const duplicateAccountSuccess = createAction(Actions.DuplicateAccountSuccess, props<{ user: User }>());
export const duplicateAccountFailure = createAction(Actions.DuplicateAccountFailure, props<{ error: any }>());
