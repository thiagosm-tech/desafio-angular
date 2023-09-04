import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { cpf } from 'cpf-cnpj-validator';


@Injectable({
  providedIn: 'root',
})
export class CpfValidationService {
  constructor() {}

  validateCpf(control: FormControl) {
    const cpfValue = cpf.format(control.value);
    return cpf.isValid(cpfValue) ? null : { cpfInvalid: true };
  }
}
