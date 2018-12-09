import { Injectable, Output, EventEmitter } from '@angular/core';
import { ErrorService } from "../error/error.service";

import { Alert } from "../../model/alert.interface";
import { User } from "src/app/model/user";

import { Account } from "src/app/model/account";
import { BudgetAccount } from "src/app/model/budgetAccount";
import { BankAccount } from "src/app/model/bankAccount";
import { Observable, of, Subject } from 'rxjs';
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import * as STORAGEKEYS from "../auth/storage-keys";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Account[] = [];

  @Output() accountsChanged: EventEmitter<Account[]> = new EventEmitter();

  constructor(public errorservice: ErrorService, private authService: AuthService, private http: HttpClient) { }

  createAccount() {
    let user = this.authService.getAuthorizedUser();

    this.http.post<Account>(environment.apiUrl + "/account/create",
      new Account(user._id,"today","Empty account")
    ).subscribe(
      (account) => {
        this.accounts.push(account);
      });
  }
/* new Account(
      new BudgetAccount("something", "something else", "something trice"),
      new BankAccount("bank nickname", "bank name", "account namess")
      , user._id, "now?", "My account") */

  getAccounts() {

    const user: User = this.authService.getAuthorizedUser();

    if(user) {
      /*  TEST */
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      const params = new HttpParams().set("owner_id", user._id);

      /* No need to use .map(res => res.json()) anymore */
      this.http.get<Account[]>(environment.apiUrl + "/account/getall", {headers: headers, params: params})
      .subscribe((accounts: Account[]) => {
        this.accounts = accounts;
        this.errorservice.tellError({type: "success", message: "Retrieved " + accounts.length + " Accounts!"});
        this.accountsChanged.emit(this.accounts);
      });

    } else {
      // On no user found
      this.errorservice.tellError({type: "warning", message: "User not authorized!"});
    }
  }


  edit(sync_id: string) {
    this.errorservice.tellError({type: "success", message: "accountservice.edit() works! Sync_id: " + sync_id});
  }

  delete( account: Account )
  {


    this.http.post<Account>(environment.apiUrl + "/account/delete",
      account
    ).subscribe(
      (deletedAccount: Account) => {
        this.errorservice.tellError({type: "success", message: "Deleted " + account.nickName + " ID: " + account._id});
        this.accounts = this.accounts.filter(acc => acc._id !== deletedAccount._id);
        this.accountsChanged.emit(this.accounts);
      });
  }
}
