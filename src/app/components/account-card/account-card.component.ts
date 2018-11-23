import { Component, OnInit, Input } from '@angular/core';
import { Account } from "src/app/model/account";
import { UserService } from "src/app/services/user/user.service";
import { AccountService } from "src/app/services/account/account.service";

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  @Input() account: Account;
  constructor(private accountservice: AccountService) { }

  ngOnInit() {

  }

  edit() {
    this.accountservice.edit(this.account.getId());
  }

  delete() {
    this.accountservice.remove(this.account.getId());
  }

}
