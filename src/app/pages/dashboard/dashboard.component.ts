import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "src/app/services/user/user.service";
import { User } from "src/app/model/user";
import { Account } from "src/app/model/account";
import { AccountService } from "src/app/services/account/account.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  accounts: Account[];

  constructor(private userservice: UserService,
  private accountService: AccountService) { }

  ngOnInit() {
    this.user = this.userservice.getUser("1");
    this.accounts = this.accountService.getAccounts(this.user.getID());
  }

}
