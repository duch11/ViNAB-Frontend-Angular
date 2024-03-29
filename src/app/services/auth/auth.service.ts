import { Injectable } from '@angular/core';
import { User } from "src/app/model/user";
import { ErrorService } from "../error/error.service";
import { HttpClient } from "@angular/common/http";
import { Observable, of, Subscriber } from "rxjs";
import { environment } from "src/environments/environment";
import * as ERRORS from "../error/error-messages";
import * as STORAGEKEYS from "./storage-keys";
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private user: User;
  sessionValid: boolean;
  useLocalStorage: boolean;


  constructor(private errorService: ErrorService, private http: HttpClient) { }

  getAuthorizedUser(): User
  {
    if(this.isSessionValid()){
      if(this.isSessionInLocalstorage()){
        return new User(
        localStorage.getItem(STORAGEKEYS.SESSION_KEY),
        localStorage.getItem(STORAGEKEYS.USER_EMAIL),
        localStorage.getItem(STORAGEKEYS.USER_FIRSTNAME));
      } else {
        console.log(this.user);
        return this.user;
      }
    }
    return null;
  }

  register(user: User): Observable<boolean> {

    if (this.isUserValid(user)) {
      const REQUEST = this.http.post(environment.apiUrl + '/user/create',
        {
          email: user.email,
          name: user.name,
          password: user.password,
          loggedin: true
        }
      );
      return new Observable<boolean>((observer) => {
        REQUEST.subscribe(
        // if res.status(200) (User is valid)
          (resp: User) => {
            // save login in memory
            this.saveLoginCallback(resp,observer);
            // tell errors
            this.errorService.clearError(ERRORS.EMAIL_INVALID);
            this.errorService.clearError(ERRORS.EMAIL_TAKEN);
            this.errorService.clearError(ERRORS.PASSWORD_INVALID);
            this.errorService.clearError(ERRORS.NAME_INVALID);
            this.errorService.tellError(ERRORS.USER_CREATED);
          }
          ,
          (errorResp) => {
            this.errorService.tellError(ERRORS.EMAIL_TAKEN);
            console.log("user.service.register(): Got error: Message: " + errorResp.message + " Body: "+ errorResp.body);
            this.disableLocalStorage();
            observer.next(false);
          }
        ); // end of subscribe
      });
    } // end of if
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
        this.saveLoginCallback(resp,observer);
      }
      ,
      (errorResp) => {
        console.log("user.service.doLogin(): Got error: Message: " + errorResp.message + " Body: "+ errorResp.body);
        this.disableLocalStorage();
        observer.next(false);
      }); // end of subscribe
    }); // end of new observable

    // Request is sent, when we subscribe to it!
  } // end of doLogin()

  saveLoginCallback(resp: User, observer?: Subscriber<boolean>) {
    console.log("user.service.loginCallback(): Got response: " + resp.name + " " + resp.email + " " + resp._id);
    if(this.useLocalStorage){
      localStorage.setItem(STORAGEKEYS.SESSION_KEY, resp._id);
      localStorage.setItem(STORAGEKEYS.SESSION_ACTIVE, "true");
      localStorage.setItem(STORAGEKEYS.USER_EMAIL, resp.email);
      localStorage.setItem(STORAGEKEYS.USER_FIRSTNAME, resp.name);
    } else {
      this.disableLocalStorage();
      this.sessionValid = true;
      this.user = resp;
    }

    if(observer) {
      observer.next(true);
    }
  }

  isSessionValid(): boolean {
    if (localStorage.getItem("sessionActive") === "true" && localStorage.getItem("sessionKey") !== "") {
      // here code that fetches the user could go
      return true;
    } else if (this.sessionValid) {
     return true;
    } else {
      return false;
    }
  }

  isSessionInLocalstorage(): boolean {
    if(localStorage.getItem(STORAGEKEYS.SESSION_KEY)){
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.http.post(environment.apiUrl + "/user/logout", {_id: localStorage.getItem(STORAGEKEYS.SESSION_KEY)}).subscribe();
    this.user = new User();
    this.sessionValid = false;
    this.disableLocalStorage();
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

