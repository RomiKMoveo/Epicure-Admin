import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token') != undefined) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     // return true;
//     const isAuthenticated = true;
//     if (JwtInterceptor.accessToken) return true;

//     this.router.navigate(['/account/login']);

//     return false;
//   }
// }