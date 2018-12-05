import { Injectable } from '@angular/core';
import { User } from "../../model/user";
import { ErrorService } from "../error/error.service";
import { Alert } from "../../model/alert.interface";
import { TESTUSERS } from "../../model/test-data";
import { Observable, of, Subject } from 'rxjs';
import { Account } from "../../model/account";

import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

import * as ERRORS from "../error/error-messages";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private errorService: ErrorService, private http: HttpClient) { }

  // to actually log-in!
  doLogin(user: User): Observable<User> {
    const REQUEST = this.http.post(environment.apiUrl + '/user/login',
      {
        email: user.email,
        password: user.password
      }
    );
    // Request is sent, when we subscribe to it!
    REQUEST.subscribe(
      // if res.status(200) (User is valid)
      (resp: any) => {
        console.log("user.service.doLogin(): Got response: " + resp);

        this.user = new User(resp._id, resp.email, resp.name);
        // (resp && resp.user && resp.user.name) ? "Welcome ${resp.user.name}" : "Logged in!"
      },
      // if res.status(403) (User invalid!) (and maybe an 'errorMessage' variable)
      (errorResp) => {
        console.log("user.service.doLogin(): Got response: " + errorResp);
        this.user = null;
        // errorResp.error ? errorResp.error.errorMessage : "An unknown error has occured."
      }
    );

    return of(this.user);
}

  /* Needs to be finished
  logOut() {
    // get request, with "credentials for session cookie"
    const REQUEST = this.http.post(
      environment.apiUrl + '/user/logout',
        {
          session: this.session
        }
      );

    // subscribe to the result of the get request
    REQUEST.subscribe(
      // if http.get() decides it's a successfull request, this will be called
      (resp: any) => {
        this.session = "";
      },
      // this will by definition of a subscription,
      // be called if there is an error, defined by http.get()
      (errorResp) => {
        this.errorService.tellError(
          {type: "warning", message: "Can not log out"}
        );
      }
    );
  }
  */

  /* NEED REWORK
  getUser(id: string): User {
    const user = TESTUSERS.find(tu => tu.getID() === id);
    if (user) {
      return user;
    }
    return null;
  } */


  /* NOT USED
  private loginConfirmed(user: User): boolean {
    if (user.email === "my@email.com" && user.password === "123456") {
      this.errorService.clearError(LOGIN_INVALID);
      this.errorService.tellError(LOGIN_VALID);
      return true;
    }
    this.errorService.tellError(LOGIN_INVALID);

    return false;
  }
  */
  addUser(user: User): boolean {
    if (!this.isUserValid(user)) {
      return false;
    } else {
      this.errorService.clearError(ERRORS.EMAIL_INVALID);
      this.errorService.clearError(ERRORS.PASSWORD_INVALID);
      this.errorService.clearError(ERRORS.NAME_INVALID);
      this.errorService.tellError(ERRORS.USER_CREATED);
      return true;
      }
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
}
