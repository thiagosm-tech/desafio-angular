import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Account } from '../models/user.model';

const BASE_URL = environment.baseUrl;


@Injectable({ providedIn: 'root' })
export class AccountService {

    constructor(private http: HttpClient) { }

    duplicateAccount(body: Account, cpf: string) {
        let endpoint = `${BASE_URL}/account/duplicate/${cpf}`
        return this.http.post(endpoint, body);
    }
}