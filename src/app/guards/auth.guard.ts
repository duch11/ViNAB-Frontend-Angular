import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth/auth.service";
import { nextContext } from "@angular/core/src/render3";
import { CanDeactivate } from "@angular/router/src/utils/preactivation";
import { ErrorService } from "../services/error/error.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private errorService: ErrorService) {

  }
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let urlDestination: string;

    // if not destination not empty, giv it's value
    if (next.url.toString()) {
      urlDestination = next.url.toString();
      console.log(urlDestination);
    } else {
      urlDestination = "";
    }

    // OK session --> ALL LOCKED URL        : OK
    // NO session --> REGISTER + LOGIN URL  : OK
    if( this.isSessionValid() === this.urlNeedsAuth(urlDestination) ) {
      return true;
    }

    // NO session --> LOCKED URL            : NOT OK
    //                                      : REDIRECT TO LOGIN
    if( !this.isSessionValid() && this.urlNeedsAuth(urlDestination) ) {
      this.router.navigate([""]);
      return false;
    }

    // OK session --> REGISTER + LOGIN URL  : NOT OK
    //                                      : REDIRECT TO DASHBOARD
    if( this.isSessionValid() && !this.urlNeedsAuth(urlDestination) ) {
      this.router.navigate(["/dashboard"]);
      return false;
    }
  }

  isSessionValid(): boolean {
    if(this.authService.isSessionValid()){
      return true;
    } else {
      return false;
    }
  }

  urlNeedsAuth (url: string): boolean {
    if(url === "" || url === "register") {
      return false;
    } else {
      return true;
    }
  }



}
