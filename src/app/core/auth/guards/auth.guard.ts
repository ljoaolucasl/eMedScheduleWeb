import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const router = inject(Router);

  return inject(AuthService)
    .getAuthenticatedUser()
    ?.pipe(
      map((user) => {
        if (user) return true;
        return router.parseUrl('/login');
      })
    );
};
