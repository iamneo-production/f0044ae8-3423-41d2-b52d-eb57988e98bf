import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponseModel } from '../shared/ResponseModel';
import { UserModel } from '../shared/UserModel';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, public router: Router) {}

    BaseUrl = "https://8080-cfdbfaffcbafbeaabeccbbfbcafdeccaedae.examlyiopb.examly.io/";

    // Login Check For Normal Users
    LoginCheck(_email: string, _password: string): Observable<ResponseModel> {

        let Url = this.BaseUrl + 'user/login';
        const body = { email: _email, password: _password }
        const headers = { 'content-type': 'application/json' };
        return this.http.post<ResponseModel>(Url, JSON.stringify(body), { headers: headers });

    }

    // SignupCheck For Users
    SignupCheck(body: UserModel): Observable<ResponseModel> {
        let Url = this.BaseUrl + 'user/signup';
        const headers = { 'content-type': 'application/json' };
        return this.http.post<ResponseModel>(Url, JSON.stringify(body), { headers: headers });
    }
}