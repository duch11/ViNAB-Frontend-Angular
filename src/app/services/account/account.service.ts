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

  createAccount(): Observable<Account> {
    let user = this.authService.getAuthorizedUser();

    return this.http.post<Account>(environment.apiUrl + "/account/create",
    new Account(
      new BudgetAccount("something", "something else", "something trice"),
      new BankAccount("bank nickname", "bank name", "account namess")
      , user._id, "now?", "My account")
    );
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
      this.errorservice.tellError({type: "warning", message: "User not authorized!"});
    }

    return new Observable<Account[]>();
  }


  edit(sync_id: string) {
    this.errorservice.tellError({type: "success", message: "accountservice.edit() works! Sync_id: " + sync_id});
  }
  remove(sync_id: string) {

  }

  delete( account: Account ): Observable<Account>
  {
    this.errorservice.tellError({type: "success", message: "Deleted Account with _id: " + account._id});

    let user = this.authService.getAuthorizedUser();

    return this.http.post<Account>(environment.apiUrl + "/account/delete",
      account
    );
  }
}
