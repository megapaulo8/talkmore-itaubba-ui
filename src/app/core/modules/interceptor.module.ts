import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { NgModule, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';

import { applicationId } from '../../../environments/environment';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let _headers;

    if (!req.headers.get('isExternal')) {
      _headers = { headers: req.headers.set('applicationid', `${applicationId}`) };
    }

    return next.handle(req.clone(_headers)).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    }
  ],
})

export class Interceptor { }
