import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Http } from './http.service';
import { UserData } from '../models/user/user-data';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private _http: Http
  ) { }

  getLoggedProfile(): Observable<UserData> {
    return this._http.getExternal('https://run.mocky.io/v3/7caa2533-e7c1-42eb-9051-5d70cf614a23');
  }
}
