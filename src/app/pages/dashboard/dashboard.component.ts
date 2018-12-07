import { Component, OnInit, Input } from '@angular/core';
import { User } from "src/app/model/user";
import { Account } from "src/app/model/account";
import { AccountService } from "src/app/services/account/account.service";
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() user: User;
  private accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts()
    .subscribe(
      (accounts: Account[]) => {
        this.accounts = accounts;
      }
    );
  }

  addAccount() {
    this.accountService.createAccount("1");
  }

}
