import { Component, OnInit, Input } from '@angular/core';
import { Account } from "src/app/model/account";
import { AccountService } from "src/app/services/account/account.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  @Input() account: Account;
  @Input() accounts: Account[];
  constructor(private accountService: AccountService,
  private router: Router) { }

  ngOnInit() {

  }

  edit() {
    //this.accountservice.edit();
    this.router.navigate(["details"]);
  }

  delete(account) {
    this.accountService.delete(account).subscribe(
      (deletedAccount: Account) => {
        this.accounts = this.accounts.filter(acc => acc._id !== deletedAccount._id);
      }
    );
  }



}
