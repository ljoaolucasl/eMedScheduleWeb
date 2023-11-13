import { Observable } from 'rxjs';

export interface IDataService<TForm, TList, TFull> {
  endpoint: string;
  post(item: TForm): Observable<TList>;
  put(id: string, item: TForm): Observable<TList>;
  delete(id: string): Observable<TList>;
  get(): Observable<TList[]>;
  getById(id: string): Observable<TForm>;
  getCompleteById(id: string): Observable<TFull>;
}
