import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

const BASE_URL = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    getUser(cpf: any) {
        let endpoint = `${BASE_URL}/user/${cpf}`
        return this.http.get(endpoint);
    }
}