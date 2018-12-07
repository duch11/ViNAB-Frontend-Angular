import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth/auth.service";
import { nextContext } from "@angular/core/src/render3";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let url: string = state.url;

    return this.checkSession(url);
  }
  checkSession( url: string ): boolean {
    if(this.authService.isSessionValid()){
      return true;
    }
    this.router.navigate([""]);
    return false;
  }



}
