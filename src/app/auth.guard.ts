import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './core/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const user = !!authService.getToken;

  if (user) {
    return true;
  }

  //router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
  return false;
};
