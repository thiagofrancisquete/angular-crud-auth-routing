import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    if (this.authService.userIsLogged()) {
       /* ativa as rotas */
      return true;
    }

    /* caso nao esteja logado trava em login  */
    this.router.navigate(['/login']);

     /* nao ativa  */
    return false;
  }
}
