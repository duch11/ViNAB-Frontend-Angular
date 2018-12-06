import { Injectable } from '@angular/core';
import { User } from "src/app/model/user";
import { ErrorService } from "../error/error.service";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import * as ERRORS from "../error/error-messages";
import * as STORAGEKEYS from "./storage-keys";
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;


  constructor(private errorService: ErrorService, private http: HttpClient) { }

  getAuthorizedUser(): User
  {
    if(this.sessionValid()){
      return new User(
        localStorage.getItem(STORAGEKEYS.SESSION_KEY),
        localStorage.getItem(STORAGEKEYS.USER_EMAIL),
        localStorage.getItem(STORAGEKEYS.USER_FIRSTNAME));
    }
    return null;
  }


  register(user: User): boolean {
    if (this.isUserValid(user)) {
      this.errorService.clearError(ERRORS.EMAIL_INVALID);
      this.errorService.clearError(ERRORS.PASSWORD_INVALID);
      this.errorService.clearError(ERRORS.NAME_INVALID);
      this.errorService.tellError(ERRORS.USER_CREATED);

      return false;
    } else {

      return false;
    }
  }

  // to actually log-in!
  doLogin(user: User): Observable<boolean> {
    const REQUEST = this.http.post(environment.apiUrl + '/user/login',
      {
        email: user.email,
        password: user.password
      }
    ); // end of REQUEST

    return new Observable<boolean>((observer) => {
      REQUEST.subscribe(

      // if res.status(200) (User is valid)
      (resp: User) => {
        console.log("user.service.doLogin(): Got response: " + resp.name + " " + resp.email + " " + resp._id);
        localStorage.setItem(STORAGEKEYS.SESSION_KEY, resp._id);
        localStorage.setItem(STORAGEKEYS.SESSION_ACTIVE, "true");
        localStorage.setItem(STORAGEKEYS.USER_EMAIL, resp.email);
        localStorage.setItem(STORAGEKEYS.USER_FIRSTNAME, resp.name);
        observer.next(true);
      },
      (errorResp) => {
        console.log("user.service.doLogin(): Got error: Message: " + errorResp.message + " Body: "+ errorResp.body);
        this.disableLocalStorage();
        observer.next(false);
      }); // end of subscribe
    }); // end of new observable

    // Request is sent, when we subscribe to it!
  } // end of doLogin()

  sessionValid(): boolean {
    if (localStorage.getItem("sessionActive") === "true" && localStorage.getItem("sessionKey") !== "") {
      // here code that fetches the user could go
      return true;
    } else {
     return false;
    }
  }

  logOut() {
    this.http.post(environment.apiUrl + "/user/logout", {_id: localStorage.getItem(STORAGEKEYS.SESSION_KEY)}).subscribe(
      (response) => {
        this.disableLocalStorage();
      },
      (errorResp) => {
        this.disableLocalStorage();
      }
    );
  }

  disableLocalStorage(){
    localStorage.setItem(STORAGEKEYS.SESSION_KEY, "");
    localStorage.setItem(STORAGEKEYS.SESSION_ACTIVE, "false");
    localStorage.setItem(STORAGEKEYS.USER_EMAIL, "");
    localStorage.setItem(STORAGEKEYS.USER_FIRSTNAME, "");
  }

  isUserValid(user: User): boolean {
    let valid: boolean;
    valid = this.isNameValid(user.name);
    valid = this.isEmailValid(user.email);
    valid = this.isPasswordValid(user.password);
    return valid;
  }

  isPasswordValid(password: string): boolean {
    if (password.length >= ERRORS.PASS_MIN_LENGTH) {
      this.errorService.clearError(ERRORS.PASSWORD_INVALID);
      return true;
    }
    this.errorService.tellError(ERRORS.PASSWORD_INVALID);
    return false;
  }

  isEmailValid(email: string): boolean {
    if (email.length >= ERRORS.EMAIL_MIN_LENGTH) {
      this.errorService.clearError(ERRORS.EMAIL_INVALID);
      return true;
    } else {
      this.errorService.tellError(ERRORS.EMAIL_INVALID);
      return false;
    }
  }
  isNameValid(name: string): boolean {
    if (name.length >= ERRORS.NAME_MIN_LENGTH) {
      this.errorService.clearError(ERRORS.NAME_INVALID);
      return true;
    } else {
      this.errorService.tellError(ERRORS.NAME_INVALID);
      return false;
    }
  }

} // end of auth service

