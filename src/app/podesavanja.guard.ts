import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

export const podesavanjaGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const as: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const url: string = state.url;
  let val: string | null = localStorage.getItem('prijavljen');

  if (val != null && val == 'true') {
    if (url == '/prijava') router.parseUrl('/podesavanja');
    else return true;
  } else return router.parseUrl('/prijava');
};
