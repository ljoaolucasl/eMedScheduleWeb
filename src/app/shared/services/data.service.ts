import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { IDataService } from '../models/data.interface.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class DataService<TForm, TList, TFull>
  implements IDataService<TForm, TList, TFull>
{
  protected url: string = `${environment.accessToken}/api/`;
  abstract endpoint: string;

  constructor(protected http: HttpClient, protected authService: AuthService) {}

  post(item: TForm): Observable<TList> {
    return this.http.post<any>(this.url + this.endpoint, item).pipe(
      map((res) => res.data),
      catchError((error) => this.processError(error))
    );
  }

  put(id: string, item: TForm): Observable<TList> {
    return this.http.put<any>(this.url + this.endpoint + '/' + id, item).pipe(
      map((res) => res.data),
      catchError((error) => this.processError(error))
    );
  }

  delete(id: string): Observable<TList> {
    return this.http
      .delete<any>(this.url + this.endpoint + '/' + id)
      .pipe(catchError((error) => this.processError(error)));
  }

  get(): Observable<TList[]> {
    return this.http.get<any>(this.url + this.endpoint).pipe(
      map((res) => res.data),
      catchError((error) => this.processError(error))
    );
  }

  getById(id: string): Observable<TForm> {
    return this.http.get<any>(this.url + this.endpoint + '/' + id).pipe(
      map((res) => res.data),
      catchError((error) => this.processError(error))
    );
  }

  getCompleteById(id: string): Observable<TFull> {
    return this.http
      .get<any>(this.url + this.endpoint + '/complete-view/' + id)
      .pipe(
        map((res) => res.data),
        catchError((error) => this.processError(error))
      );
  }

  processError(error: HttpErrorResponse) {
    let messageError = '';

    if (error.status == 0)
      messageError = 'An error occurred while processing the request.';
    if (error.status == 401)
      messageError = 'The user is not authorized. Log in and try again.';
    else messageError = error.error?.errors[0];

    return throwError(() => new Error(messageError));
  }
}
