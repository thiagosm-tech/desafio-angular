import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountService } from './account.service';
import { Account } from '../models/user.model';
import { environment } from 'src/environments/environment';

describe('AccountService', () => {
  let accountService: AccountService;
  let httpTestingController: HttpTestingController;

  const BASE_URL = environment.baseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });
    accountService = TestBed.inject(AccountService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return an Observable<Account>', () => {
    const mockAccount: Account = { accountNumber: '132744-7'};
    const mockCpf: string = '11111111111';
    const mockUrl: string = `${BASE_URL}/account/duplicate/${mockCpf}`;

    accountService.duplicateAccount(mockAccount, mockCpf).subscribe((response: any) => {
      expect(response).toEqual(mockAccount);
    });

    const req = httpTestingController.expectOne(mockUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(mockAccount);
  });
});