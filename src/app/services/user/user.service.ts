import { Injectable } from '@angular/core';
import { User } from "../../model/user";
import { ErrorService } from "../error/error.service";
import { Alert } from "../../model/alert.interface";
import { TESTUSERS } from "../../model/test-data";
import { Observable, of } from 'rxjs';
import { Account } from "../../model/account";

const ERROR_TYPE_SUCCESS = "success";
const ERROR_TYPE_WARNING = "warning";
const ERROR_TYPE_DANGER = "danger";

const EMAIL_MIN_LENGTH = 8;
const PASS_MIN_LENGTH = 6;
const NAME_MIN_LENGTH = 2;

const EMAIL_INVALID: Alert = { type: ERROR_TYPE_WARNING,
  message: "Email not valid! Needs to be at least "
    + EMAIL_MIN_LENGTH + " characters long!" };

const PASSWORD_INVALID: Alert = { type: ERROR_TYPE_WARNING,
  message: "Password not valid! Needs to be at least "
    + PASS_MIN_LENGTH + " characters long!"};

const NAME_INVALID: Alert = { type: ERROR_TYPE_WARNING,
  message: "Name not valid! Needs to be at least "
    + NAME_MIN_LENGTH + " characters long!"  };

const USER_CREATED: Alert = { type: ERROR_TYPE_SUCCESS,
  message: "User created!" };

const LOGIN_INVALID: Alert = { type: ERROR_TYPE_DANGER,
  message: "Wrong Email or password. try my@email.com and 123456" };

const LOGIN_VALID: Alert = { type: ERROR_TYPE_SUCCESS,
message: "Welcome, you've been logged in!" };


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private errorService: ErrorService) { }

  getUser(id: string): User {
    const user = TESTUSERS.find(tu => tu.getID() === id);
    if (user) {
      return user;
    }
    return null;
  }

  login(user: User): boolean {
    return this.loginConfirmed(user);
  }

  private loginConfirmed(user: User): boolean {
    if (user.email === "my@email.com" && user.password === "123456") {
      this.errorService.clearError(LOGIN_INVALID);
      this.errorService.tellError(LOGIN_VALID);
      return true;
    }
    this.errorService.tellError(LOGIN_INVALID);

    return false;
  }

  addUser(user: User): boolean {
    if (!this.isUserValid(user)) {
      return false;
    } else {
      this.errorService.clearError(EMAIL_INVALID);
      this.errorService.clearError(PASSWORD_INVALID);
      this.errorService.clearError(NAME_INVALID);
      this.errorService.tellError(USER_CREATED);
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
    if (password.length >= PASS_MIN_LENGTH) {
      this.errorService.clearError(PASSWORD_INVALID);
      return true;
    }
    this.errorService.tellError(PASSWORD_INVALID);
    return false;
  }

  isEmailValid(email: string): boolean {
    if (email.length >= EMAIL_MIN_LENGTH) {
      this.errorService.clearError(EMAIL_INVALID);
      return true;
    } else {
      this.errorService.tellError(EMAIL_INVALID);
      return false;
    }
  }
  isNameValid(name: string): boolean {
    if (name.length >= NAME_MIN_LENGTH) {
      this.errorService.clearError(NAME_INVALID);
      return true;
    } else {
      this.errorService.tellError(NAME_INVALID);
      return false;
    }
  }
}
