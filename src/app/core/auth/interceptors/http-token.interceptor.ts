import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';

export const httpTokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const token = inject(LocalStorageService).loadingData()?.token;

  const requestModify = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(requestModify);
};
