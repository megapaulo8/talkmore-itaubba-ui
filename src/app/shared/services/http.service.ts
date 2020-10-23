import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from "@angular/platform-browser";

import { Observable, BehaviorSubject, Subscription } from "rxjs";
import {
  cacheExpiresDelay,
  realTimeUpdateDelay,
  API,
} from "./../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class Http {
  private readonly newRequisitionUrl: boolean[];
  private readonly stopAutoUpdateValue: boolean[];
  private readonly repeatSubscription: Subscription[];
  private readonly repeatObservables: Observable<any[]>[];
  private repeatSubjects: BehaviorSubject<any[]>[];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.repeatSubjects = [];
    this.repeatObservables = [];
    this.newRequisitionUrl = [];
    this.repeatSubscription = [];
    this.stopAutoUpdateValue = [];
  }

  /**
   * Função de requisição HTTP Get
   *
   * @param {{}} url URL ser acessada
   * @param {{}} TypeGet Tipo do objeto a ser retornado Ex.: Usuário
   * @param {{}} cache se pode armazenar cache de requisição a ser acessada
   *
   *
   */

  public get<T>(url: string, options?, cache?: boolean): Observable<any> {
    if (!cache) {
      const _url: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        API() + url
      );
      const _securityUrl: string = this.sanitizer.sanitize(5, _url);
      return this.http.get<T>(_securityUrl, options);
    } else {
      if (!this.repeatSubjects[url]) {
        this.repeatSubjects[url] = new BehaviorSubject<T[]>(undefined);

        this.repeatObservables[url] = new Observable<T>(() =>
          this.get<T>(url).subscribe((values) =>
            this.repeatSubjects[url].next(values)
          )
        );
        this.repeatObservables[url].subscribe();

        setTimeout(
          () => (this.repeatSubjects[url] = undefined),
          cacheExpiresDelay
        );
      }
      return this.repeatSubjects[url];
    }
  }

  public getExternal<T>(url: string): Observable<T> {
    const _safeResourceUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      url
    );
    const _safeUrl: string = this.sanitizer.sanitize(5, _safeResourceUrl);
    return this.http.get<T>(_safeUrl);
  }

  public getText<T>(url: string, options?): Observable<any> {
    const _safeResourceUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      API() + url
    );
    const _safeUrl: string = this.sanitizer.sanitize(5, _safeResourceUrl);

    let obj: any;
    if (options) {
      obj = options;
      obj.responseType = "text" as "json";
    } else obj = { responseType: "text" as "json" };

    return this.http.get<T>(_safeUrl, obj);
  }

  public getBlob<T>(url: string, options?): Observable<any> {
    const _safeResourceUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      API() + url
    );
    const _safeUrl: string = this.sanitizer.sanitize(5, _safeResourceUrl);

    let obj: any;
    if (options) {
      obj = options;
      obj.responseType = "blob";
    } else obj = { responseType: "blob" };

    return this.http.get<T>(_safeUrl, obj);
  }

  /**
   * Função de requisição HTTP post
   *
   * @param {{}} url URL ser acessada
   * @param {{}} data Objeto a ser enviado
   * @param {{}} SendType Tipo do objeto a ser enviado Ex.: AuthLogin
   * @param {{}} ReturnType Tipo do objeto a ser retornado Ex.: AuthReturn
   *
   */
  public post<SendType, ReturnType>(
    url: string,
    data: SendType,
    returnText?: boolean
  ): Observable<ReturnType> {
    let _responseType = returnText ? ("text" as "json") : "json";

    const _safeResourceUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(
      API() + url
    );
    const _safeUrl: string = this.sanitizer.sanitize(4, _safeResourceUrl);
    return this.http.post<ReturnType>(_safeUrl, data, {
      responseType: _responseType,
    });
  }

  /**
   * Função de requisição HTTP Put
   *
   * @param {{}} url URL ser acessada
   * @param {{}} SendType Tipo do objeto a ser enviado Ex.: Usuário
   *
   */
  public put<SendType, ReturnType>(
    url: string,
    data: SendType,
    options?
  ): Observable<any> {
    const _safeResourceUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(
      API() + url
    );
    const _safeUrl: string = this.sanitizer.sanitize(4, _safeResourceUrl);
    return this.http.put<ReturnType>(_safeUrl, data, options);
  }
  /**
   * Função de requisição HTTP Delete
   *
   * @param {{}} url URL ser acessada
   *
   */
  public delete(url: string): Observable<boolean> {
    const _safeResourceUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(
      API() + url
    );
    const _safeUrl: string = this.sanitizer.sanitize(4, _safeResourceUrl);
    return this.http.delete<boolean>(_safeUrl);
  }

  public getRepeated<T>(url: string, update?: boolean): Observable<T> {
    if (this.newRequisitionUrl[url] === undefined)
      this.newRequisitionUrl[url] = true;
    if (this.stopAutoUpdateValue[url] === undefined)
      this.stopAutoUpdateValue[url] = false;

    if (!this.repeatObservables[url] || update || this.newRequisitionUrl[url]) {
      this.newRequisitionUrl[url] = false;
      if (!this.repeatSubjects[url])
        this.repeatSubjects[url] = new BehaviorSubject<T[]>([]);

      this.repeatObservables[url] = new Observable(() => {
        if (
          this.repeatSubscription[url] &&
          !this.repeatSubscription[url].closed
        )
          this.repeatSubscription[url].unsubscribe();

        this.repeatSubscription[url] = this.get<T[]>(url).subscribe(
          (values) => {
            this.repeatSubjects[url].next(values);

            if (this.stopAutoUpdateValue[url] === false)
              setTimeout(
                () => this.getRepeated(url, true),
                realTimeUpdateDelay
              );
            else {
              this.newRequisitionUrl[url] = true;
              this.stopAutoUpdateValue[url] = false;
            }
          }
        );
      });

      this.repeatObservables[url].subscribe();
    }

    return this.repeatSubjects[url];
  }

  public initCache(url: string): void {
    if (!this.repeatObservables[url]) {
      if (!this.repeatSubjects[url])
        this.repeatSubjects[url] = new BehaviorSubject(undefined);
      this.repeatObservables[url] = new Observable(() => {
        this.get(url).subscribe((values) => {
          this.repeatSubjects[url].next(values);
        });
      });
      this.repeatObservables[url].subscribe();
    }
  }

  public stopAutoUpdate(): void {
    Object.keys(this.stopAutoUpdateValue).forEach((key) => {
      this.stopAutoUpdateValue[key] = true;
    });
  }

  public cancelRepeatsRequests(url: string) {
    Object.keys(this.repeatSubscription)
      .filter((key) => key.includes(url))
      .forEach((key) => {
        this.repeatSubscription[key].unsubscribe();
        setTimeout(() => this.getRepeated(key, true), realTimeUpdateDelay);
      });
  }

  public clearCache() {
    this.repeatSubjects = [];
  }

  /**
   * Função de requisição HTTP dinâmica
   *
   * @param {string} method Qual metodo :  'Get' | 'Post' | 'Put' | 'Delete'.
   * @param {string} route rota ser acessada.
   * @param {{}} data Objeto a ser enviado caso precise.
   *
   */

  public execute<TType>(
    method: any,
    route: string,
    data?: any
  ): Observable<TType | boolean> {
    method = method.toUpperCase();
    switch (method) {
      case "GET":
        return this.get<TType>("/" + route);
      case "POST":
        return this.post("/" + route, data);
      case "PUT":
        return this.put("/" + route, data);
      case "DELETE":
        return this.delete("/" + route);
    }
  }
}
