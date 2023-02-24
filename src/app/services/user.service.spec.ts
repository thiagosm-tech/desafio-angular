import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.baseUrl;

describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService]
        });

        service = TestBed.inject(UserService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call the getUser API', () => {
        const mockCpf = '209.284.440-74';
        const mockResponse = {
            cpf: '209.284.440-74',
            name: 'maria eduarda',
            status: 'regular',
            account: [
                { accountNumber: '132744-7' },
                { accountNumber: '998244-4' },
            ]
        };

        service.getUser(mockCpf).subscribe(response => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${BASE_URL}/user/${mockCpf}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });
});