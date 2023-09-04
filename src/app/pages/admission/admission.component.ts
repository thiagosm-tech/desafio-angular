import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { Account, User } from '../../models/user.model';
import { AppState } from 'src/app/store/app.state';
import * as AdmissionActions from '../../store/admission/admission.actions';
import { CpfValidationService } from 'src/app/services/cpf-validation.service';

const CPF_MASK = "000.000.000-00";

@Component({
  selector: 'admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  formCooperado = this.fb.group({
    cpf: ['', [Validators.required, this.cpfValidationService.validateCpf]]
  });

  cpfMask = CPF_MASK;
  user$!: Observable<User>
  haveUser: boolean = false;
  isLoading: boolean = false;

  stepList = ['Ínicio', 'Documentos', 'Dados cadastrais', 'Admissão'];
  currentStep = 0;

  constructor(
    private fb: FormBuilder,
    private cpfValidationService: CpfValidationService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.initializeUserStatus();
  }

  initializeUserStatus() {
    this.user$ = this.store.select(state => state.user).pipe(
      map(res => {
        this.isLoading = res.isLoading;
        if (res.name != '' && res.cpf) {
          this.haveUser = true;
        }

        return res;
      })
    );
  }

  getUser(cpf?: string) {
    if (this.formCooperado.get('cpf')?.invalid)
      return

    const userCpf = cpf || this.formCooperado.get('cpf')?.value;
    this.store.dispatch(AdmissionActions.consultUser({ query: userCpf }));
  }

  duplicateAccount(accountNumber: any, cpf: string) {
    let body: Account = accountNumber;
    this.store.dispatch(AdmissionActions.duplicateAccount({ query: { body, cpf } }));
  }
}
