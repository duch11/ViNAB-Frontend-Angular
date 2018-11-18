import { Injectable } from '@angular/core';
import { User } from "../model/user";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private errorService: ErrorService) { }

  addUser(user: User) {
    if (!this.isEmailValid(user.email)) {
      this.errorService.tellError("email \"" + user.email + "\" not valid!");
    }
  }

  isEmailValid(email: string): boolean {
    if (email === "") {
      return false;
    } else {
      return true;
    }
  }
}
