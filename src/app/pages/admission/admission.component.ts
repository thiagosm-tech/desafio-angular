import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { cpf } from 'cpf-cnpj-validator';
import { Account, User } from '../../models/user.model'
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs';
import { AccountService } from '../../services/account.service';

const CPF_MASK = "000.000.000-00";

@Component({
  selector: 'admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  formCooperado = this.fb.group({
    cpf: ['', [Validators.required, this.checkCPF]]
  });

  cpfMask = CPF_MASK;
  user!: User;
  userNotFound!: any;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private accountService: AccountService
  ) { }

  ngOnInit(): void { }

  getUser(cpf?: string) {
    let formCooperadoInvalid = this.formCooperado.invalid
    if (formCooperadoInvalid)
      return
    

    let userCpf = cpf || this.formCooperado.get('cpf')?.value;
    this.userService.getUser(userCpf).subscribe((res: any) => {
      this.user = res.user;
    });
  }

  accountDuplicate(accountNumber: any, cpf: string) {
    let body: Account = accountNumber;

    this.accountService.duplicateAccount(body, cpf).pipe(
      map((res: any) => res.success && this.getUser(cpf))
    ).subscribe();
  }

  checkCPF(control: FormControl) {
    const cpfValue = cpf.format(control.value);
    return cpf.isValid(cpfValue) ? null : { cpfInvalid: !cpf.isValid(cpfValue) };
  }
}
