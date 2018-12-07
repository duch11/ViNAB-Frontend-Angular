import { Injectable } from '@angular/core';
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

  private accounts: Account[];

  constructor(public errorservice: ErrorService, private authService: AuthService, private http: HttpClient) { }

  createAccount() {
    let user = this.authService.getAuthorizedUser();
    this.http.post(environment.apiUrl + "/account/create",
    new Account(
      new BudgetAccount("something", "something else", "something trice"),
      new BankAccount("bank nickname", "bank name", "account namess")
      , user._id, "now?", "My account")
    ).subscribe(
      (response) => {

      },
      (errorResp) => {

      }
    );

      let acc = new Account(
        new BudgetAccount("Untitled username",
                          "Untitled budget name",
                          "Untitled account name"),
        new BankAccount("untitled bank nickname",
                        "untitled bank",
                        "untitled bank account name"),
        "",
        "noll",
        "new account");
  }


  getAccounts(): Observable<Account[]> {

    const user: User = this.authService.getAuthorizedUser();
    if(user) {
      /*  TEST */
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      const params = new HttpParams().set("owner_id", user._id); // Create new HttpParams
      this.http.get("/url", {headers: headers, params: params});
      /* No need to use .map(res => res.json()) anymore */
      return this.http.get<Account[]>(environment.apiUrl + "/account/getall", {headers: headers, params: params});

    } else {
      // On no user found
      this.errorservice.tellError({type: "warning", message: "accountService: getAccounts(), couldn't find a user."});
    }



    return new Observable<Account[]>();

    /*
    // todo: replace with server api call
    var sessionvalid = true;
    if (sessionvalid) {
      this.errorservice.tellError({type: "success", message: "found accounts for uID: " + userid });

      // tslint:disable-next-line:radix
      const userid_asint: number = Number.parseInt(userid);
      return ACCOUNTS[userid_asint - 1];
    }

    // error
    this.errorservice.tellError({type: "warning", message: "no accounts found for uID: " + userid });
    */
    return of();
  }


  edit(sync_id: string) {
    this.errorservice.tellError({type: "success", message: "accountservice.edit() works! Sync_id: " + sync_id});
  }
  remove(sync_id: string) {
    this.errorservice.tellError({type: "success", message: "accountservice.remove() works! Sync_id: " + sync_id});
  }
}
