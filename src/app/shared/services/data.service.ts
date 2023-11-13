import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IDataService } from '../models/data.interface.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export abstract class DataService<TForm, TList, TFull>
  implements IDataService<TForm, TList, TFull>
{
  protected url: string = 'https://e-agenda-web-api.onrender.com/api/';
  abstract endpoint: string;

  constructor(protected http: HttpClient, protected authService: AuthService) {}

  post(item: TForm): Observable<TList> {
    return this.http.post<any>(this.url + this.endpoint, item).pipe(
      map((res) => res.dados),
      catchError((erro) => this.processError(erro))
    );
  }

  put(id: string, item: TForm): Observable<TList> {
    return this.http.put<any>(this.url + this.endpoint + '/' + id, item).pipe(
      map((res) => res.dados),
      catchError((erro) => this.processError(erro))
    );
  }

  delete(id: string): Observable<TList> {
    return this.http
      .delete<any>(this.url + this.endpoint + '/' + id)
      .pipe(catchError((erro) => this.processError(erro)));
  }

  get(): Observable<TList[]> {
    return this.http.get<any>(this.url + this.endpoint).pipe(
      map((res) => res.dados),
      catchError((erro) => this.processError(erro))
    );
  }

  getById(id: string): Observable<TForm> {
    return this.http.get<any>(this.url + this.endpoint + '/' + id).pipe(
      map((res) => res.dados),
      catchError((erro) => this.processError(erro))
    );
  }

  getCompleteById(id: string): Observable<TFull> {
    return this.http
      .get<any>(this.url + this.endpoint + '/view-complete/' + id)
      .pipe(
        map((res) => res.dados),
        catchError((erro) => this.processError(erro))
      );
  }

  processError(erro: HttpErrorResponse) {
    let mensagemErro = '';

    if (erro.status == 0)
      mensagemErro = 'An error occurred while processing the request.';
    if (erro.status == 401)
      mensagemErro = 'The user is not authorized. Log in and try again.';
    else mensagemErro = erro.error?.erros[0];

    return throwError(() => new Error(mensagemErro));
  }
}
