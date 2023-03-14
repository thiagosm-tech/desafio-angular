import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AccountService } from './account.service';
import { Account } from '../models/user.model';
import { environment } from 'src/environments/environment';

describe('AccountService', () => {
    let service: AccountService;
    let httpTestingController: HttpTestingController;
    const BASE_URL = environment.baseUrl;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AccountService]
        });
        service = TestBed.inject(AccountService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should create a duplicate account', () => {
        const body: Account = { accountNumber: '132744-7' };
        const cpf = '98765432101';

        service.duplicateAccount(body, cpf).subscribe(result => {
            expect(result).toBeTruthy();
        });

        const req = httpTestingController.expectOne(`${BASE_URL}/account/duplicate/${cpf}`);
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual(body);
        req.flush({ success: true });
    });
});