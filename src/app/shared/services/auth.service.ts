import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Http } from './http.service';
import { UserLogin } from '../models/user/authentication/user-login';
import { TokenName } from '../../../environments/environment';
import { AuthenticationReturn } from '../models/user/authentication/authentication-return';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: Http
  ) { }

  public set token(token: string) {
    localStorage.setItem(TokenName, token);
  }

  public get token() {
    return localStorage.getItem(TokenName);
  }

  public logout() {
    localStorage.removeItem(TokenName);
  }

  public login(user: UserLogin): Observable<AuthenticationReturn> {
    // SEND USER LOGIN INFO TO REAL API
    return this._http.getExternal('https://run.mocky.io/v3/b7a71d77-a503-4fc6-8a8b-cddae0596702');
  }
}
