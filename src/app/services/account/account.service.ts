import { Injectable } from '@angular/core';
import { ErrorService } from "../error/error.service";

import { Alert } from "../../model/alert.interface";
import { User } from "src/app/model/user";
import { UserService } from "src/app/services/user/user.service";
import { Account } from "src/app/model/account";
import { ACCOUNTS } from "../../model/test-data";
import { BudgetAccount } from "src/app/model/budgetAccount";
import { BankAccount } from "src/app/model/bankAccount";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public errorservice: ErrorService, private userservice: UserService) { }

  createAccount(userid: string) {
    // todo: backend replacement
    // tslint:disable-next-line:radix
    const userid_asint: number = Number.parseInt(userid);
    ACCOUNTS[userid_asint - 1].push(
      new Account("-101 new account number",
        new BudgetAccount("Untitled username",
                          "Untitled budget name",
                          "Untitled account name"),
        new BankAccount("untitled bank nickname",
                        "untitled bank",
                        "untitled bank account name"),
        "noll",
        "new account"));
  }

  getAccounts(userid: string = "10"): Account[] {

    // todo: replace with server api call
    if (this.userservice.getUser(userid)) {
      this.errorservice.tellError({type: "success", message: "found accounts for uID: " + userid });

      // tslint:disable-next-line:radix
      const userid_asint: number = Number.parseInt(userid);
      return ACCOUNTS[userid_asint - 1];
    }

    // error
    this.errorservice.tellError({type: "warning", message: "no accounts found for uID: " + userid });
    return [];
  }

  edit(sync_id: string) {
    this.errorservice.tellError({type: "success", message: "accountservice.edit() works! Sync_id: " + sync_id});
  }
  remove(sync_id: string) {
    this.errorservice.tellError({type: "success", message: "accountservice.remove() works! Sync_id: " + sync_id});
  }
}
