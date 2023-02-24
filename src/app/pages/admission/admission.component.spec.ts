import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';
import { AdmissionComponent } from './admission.component';
import { UserService } from 'src/app/services/user.service';
import { AccountService } from '../../services/account.service';
import { of } from 'rxjs';

describe('AdmissionComponent', () => {
    let component: AdmissionComponent;
    let fixture: ComponentFixture<AdmissionComponent>;
    let userService: jasmine.SpyObj<UserService>;
    let accountService: jasmine.SpyObj<AccountService>;

    beforeEach(async () => {
        const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser']);
        const accountServiceSpy = jasmine.createSpyObj('AccountService', [
            'duplicateAccount',
        ]);

        await TestBed.configureTestingModule({
            declarations: [AdmissionComponent],
            imports: [ReactiveFormsModule],
            providers: [
                { provide: UserService, useValue: userServiceSpy },
                { provide: AccountService, useValue: accountServiceSpy },
            ],
        }).compileComponents();

        userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
        accountService = TestBed.inject(AccountService) as jasmine.SpyObj<AccountService>;
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdmissionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should return null when cpf is valid', () => {
        component.formCooperado.controls['cpf'].setValue('134.200.510-42');
        const control = component.formCooperado.controls['cpf'];
        const result = component.checkCPF(control as any);
        expect(result).toEqual(null);
    });

    it('should return error object when cpf is invalid', () => {
        const control = { value: '111.111.111-12' };
        const result = component.checkCPF(control as any);
        expect(result).toEqual({ cpfInvalid: true });
    });

    it('should getUser method calls the UserServices getUser method', () => {
        console.log('---------------------------------------------------------------------------')
        component.formCooperado.controls['cpf'].setValue('134.200.510-42');
        userService.getUser.and.returnValue(of({ user: {} }));
        component.getUser('111.111.111-11');
        expect(userService.getUser).toHaveBeenCalled();
    });

    it('should getUser method does not call the UserServices getUser method when the form is invalid;', () => {
        userService.getUser.and.returnValue(of({ user: {} }));
        component.formCooperado.setErrors({ invalid: true });
        component.getUser();
        expect(userService.getUser).not.toHaveBeenCalled();
    });

    it('should accountDuplicate method when calls the Accounts duplicateAccount method', () => {
        accountService.duplicateAccount.and.returnValue(of({ success: true }));
        spyOn(component, 'getUser');
        component.accountDuplicate({ number: '123' }, '111.111.111-11');
        expect(accountService.duplicateAccount).toHaveBeenCalled();
        expect(component.getUser).toHaveBeenCalled();
    });
});
