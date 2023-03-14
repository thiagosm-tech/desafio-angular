import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AdmissionComponent } from './admission.component';
import { UserService } from 'src/app/services/user.service';
import { AccountService } from '../../services/account.service';
import { Account } from 'src/app/models/user.model';

let mockAccountService = {
    duplicateAccount: (body: Account, cpf: string) => {
        return {
            subscribe: (callback: any) => {
                let response = {
                    cpf: '209.284.440-74',
                    name: 'maria eduarda',
                    status: 'regular',
                    account: [
                        { accountNumber: '132744-7' },
                        { accountNumber: '998244-4' },
                    ]
                }
                callback({ success: true });
            }
        };
    }
};

describe('AdmissionComponent', () => {
    let component: AdmissionComponent;
    let fixture: ComponentFixture<AdmissionComponent>;
    let userService: jasmine.SpyObj<UserService>;
    let accountService: jasmine.SpyObj<AccountService>;

    beforeEach(async () => {
        const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser']);

        await TestBed.configureTestingModule({
            declarations: [AdmissionComponent],
            imports: [ReactiveFormsModule],
            providers: [
                { provide: UserService, useValue: userServiceSpy },
                { provide: AccountService, useValue: mockAccountService }
            ]
        }).compileComponents();

        userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
        accountService = TestBed.inject(AccountService) as jasmine.SpyObj<AccountService>;

        fixture = TestBed.createComponent(AdmissionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not call userService.getUser if formCooperado is invalid', () => {
        component.formCooperado.controls['cpf'].setValue('123');
        component.getUser();
        expect(userService.getUser).not.toHaveBeenCalled();
    });

    // it('should call userService.getUser with the correct cpf', () => {
    //     component.formCooperado.controls['cpf'].setValue('452.243.530-41');
    //     component.getUser();
    //     expect(userService.getUser).toHaveBeenCalledWith('452.243.530-41');
    //     // expect(component.user as any).toEqual(undefined);
    // });
});