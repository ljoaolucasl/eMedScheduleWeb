import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  map,
  tap,
  catchError,
  throwError,
} from 'rxjs';
import { LoginViewModel } from '../models/login.view-model';
import { RegisterViewModel } from '../models/register.view-model';
import { TokenViewModel } from '../models/token.view-model';
import { UserTokenViewModel } from '../models/user-token.view-model';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthService {
  private url: string = 'https://localhost:7069/api/';
  private endpointRegistration: string = 'register';
  private endpointLogin: string = 'authenticate';
  private endpointLogout: string = 'logout';

  private authenticatedUser: BehaviorSubject<UserTokenViewModel | undefined>;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {
    this.authenticatedUser = new BehaviorSubject<
      UserTokenViewModel | undefined
    >(undefined);
  }

  public getAuthenticatedUser() {
    return this.authenticatedUser.asObservable();
  }

  public register(data: RegisterViewModel): Observable<TokenViewModel> {
    return this.http.post<any>(this.url + this.endpointRegistration, data).pipe(
      map((res) => res.data),
      tap((data: TokenViewModel) => {
        this.localStorage.saveData(data);
        this.notifyLogin(data.userToken);
      }),
      catchError((error) => this.processError(error))
    );
  }

  public login(data: LoginViewModel): Observable<TokenViewModel> {
    return this.http.post<any>(this.url + this.endpointLogin, data).pipe(
      map((res) => res.data),
      tap((data: TokenViewModel) => {
        this.localStorage.saveData(data);
        this.notifyLogin(data.userToken);
      }),
      catchError((error) => this.processError(error))
    );
  }

  public logout() {
    return this.http.post<any>(this.url + this.endpointLogout, {}).pipe(
      map((res) => res.data),
      tap(() => {
        this.localStorage.deleteData();
        this.notifyLogout();
      }),
      catchError((error) => this.processError(error))
    );
  }

  public savedUserLogin() {
    const data = this.getData();

    if (!data) return;

    if (new Date(data.expirationDate) > new Date())
      this.notifyLogin(data!.userToken);
  }

  public getData(): TokenViewModel | undefined {
    return this.localStorage.loadingData();
  }

  private notifyLogin(user: UserTokenViewModel) {
    this.authenticatedUser?.next(user);
  }

  public notifyLoginTest(user: UserTokenViewModel) {
    this.authenticatedUser?.next(user);
  }

  private notifyLogout() {
    this.authenticatedUser?.next(undefined);
  }

  private processError(error: HttpErrorResponse) {
    let messageError = '';

    if (error.status == 0)
      messageError = 'An error occurred while processing the request.';
    if (error.status == 401)
      messageError = 'The user is not authorized. Log in and try again.';
    else messageError = error.error?.errors[0];

    return throwError(() => new Error(messageError));
  }
}
