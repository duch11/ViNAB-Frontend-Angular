import { Injectable, Output, EventEmitter, OnInit } from '@angular/core';
import { ErrorService } from "../error/error.service";

import { Alert } from "../../model/alert.interface";
import { User } from "src/app/model/user";

import { Account } from "src/app/model/account.interface";
import { BudgetAccount } from "src/app/model/budgetAccount.interface";
import { BankAccount } from "src/app/model/bankAccount.interface";
import { Observable, of, Subject } from 'rxjs';
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import * as STORAGEKEYS from "../auth/storage-keys";

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {

  private accounts: Account[] = [];

  @Output() accountsChanged: EventEmitter<Account[]> = new EventEmitter();

  constructor(public errorservice: ErrorService, private authService: AuthService, private http: HttpClient) {
    /* console.log("accountservice created");
    this.getAccounts(); */
   }

   ngOnInit(): void {
    console.log("accountservice initialized");
    this.getAccounts();
   }

  createAccount() {
    let user = this.authService.getAuthorizedUser();

    this.http.post<Account>(environment.apiUrl + "/account/create",
      {
        lastsync: "now",
        nickName: "untitled syncnickname",
        owner_id: user._id,
        budget: {
          userName: "untitled userName",
          budgetName: "untitled budgetName",
          accountName: "untitled accountName"
        },
        bank: {
          nickName: "...",
          bankName: "...",
          accountName: "..."
        }
      } as Account
    ).subscribe(
      (account) => {
        console.log(account)
        this.accounts.push(account);
        this.emitChanges();
      });
  }

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
        this.emitChanges();
      });

    } else {
      // On no user found
      this.errorservice.tellError({type: "warning", message: "User not authorized!"});
    }
  }

  getAccount(accountID: string): Account {
    console.log("Looking for account with id: " + accountID + " in: " + this.accounts);
    return this.accounts.find(acc => acc._id === accountID);
  }

  edit(sync_id: string) {
    this.errorservice.tellError({type: "success", message: "accountservice.edit() works! Sync_id: " + sync_id});
  }

  update( accountToUpdate: Account ) {

    let user = this.authService.getAuthorizedUser();

    this.http.post<Account>(environment.apiUrl + "/account/update",
      accountToUpdate
    ).subscribe(
      (accountReturned) => {
        console.log("account returned: " + accountReturned._id);
        let index = this.accounts.findIndex(acc => acc._id === accountReturned._id);
        console.log(index);
        if(index !== -1){
          this.accounts[index] = accountReturned;
          this.emitChanges();
        }

      });

  }

  delete( account: Account )
  {

    this.http.post<Account>(environment.apiUrl + "/account/delete",
      account
    ).subscribe(
      (deletedAccount: Account) => {
        this.errorservice.tellError({type: "success", message: "Deleted " + account.nickName + " ID: " + account._id});
        this.accounts = this.accounts.filter(acc => acc._id !== deletedAccount._id);
        this.emitChanges();
      });
  }

  emitChanges(){
    this.accountsChanged.emit(this.accounts);
    console.log("Emitted change");
  }
}
