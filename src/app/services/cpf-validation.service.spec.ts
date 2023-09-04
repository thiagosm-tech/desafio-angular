import { TestBed, inject } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CpfValidationService } from './cpf-validation.service';

describe('CpfValidationService', () => {
  let service: CpfValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [CpfValidationService],
    });

    service = TestBed.inject(CpfValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate a valid CPF', () => {
    const validCpf = '123.456.789-09'; // Coloque aqui um CPF válido
    const formControl = new FormControl(validCpf);
    const validationResult = service.validateCpf(formControl);
    expect(validationResult).toBeNull();
  });

  it('should mark an invalid CPF as invalid', () => {
    const invalidCpf = '123.456.789-00'; // Coloque aqui um CPF inválido
    const formControl = new FormControl(invalidCpf);
    const validationResult = service.validateCpf(formControl);
    expect(validationResult).toEqual({ cpfInvalid: true });
  });

  it('should return null for an empty control', () => {
    const emptyControl = new FormControl('');
    const validationResult = service.validateCpf(emptyControl);
    expect(validationResult).toBeNull();
  });
});
