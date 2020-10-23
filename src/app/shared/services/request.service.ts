import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Http } from './http.service';
import { NewRequest } from '../models/ui/new-request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private _http: Http
  ) { }

  postRequest(newRequest: NewRequest): Observable<any> {
    return this._http.post('/solicitacoes', newRequest);
  }

  getRequests(): Observable<NewRequest[]> {
    return this._http.get('/solicitacoes');
  }

  getRequestById(id: string): Observable<NewRequest> {
    return this._http.get(`/solicitacoes/${id}`);
  }

  editRequest(editedRequest: NewRequest): Observable<any> {
    return this._http.put(`/solicitacoes/${editedRequest._id}`, editedRequest);
  }

  deleteRequestById(requestId: string): Observable<any> {
    return this._http.delete(`/solicitacoes/${requestId}`);
  }
}
