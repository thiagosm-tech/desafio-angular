import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { AccountService } from 'src/app/services/account.service';
import * as AdmissionActions from './admission.actions';

@Injectable()
export class AdmissionEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private accountService: AccountService,
  ) { }

  searchUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdmissionActions.consultUser),
      exhaustMap((action) =>
        this.userService.getUser(action.query).pipe(
          map((user: any) => {
            return AdmissionActions.consultUserSuccess(user)
          }),
          catchError((error) => of(AdmissionActions.consultUserFailure({ error })))
        )
      )
    )
  });

  accountDuplicate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdmissionActions.duplicateAccount),
      exhaustMap((action) =>
        this.accountService.duplicateAccount(action.query.body, action.query.cpf).pipe(
          map((user: any) => {
            return AdmissionActions.duplicateAccountSuccess(user)
          }),
          catchError((error) => of(AdmissionActions.duplicateAccountFailure({ error })))
        )
      )
    )
  });
}
