import { Component, OnInit, Input } from '@angular/core';
import { SyncPairAccount } from "src/app/model/sync-pair-account";
import { UserService } from "src/app/services/user/user.service";
import { AccountService } from "src/app/services/account/account.service";

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  @Input() syncAccount: SyncPairAccount;
  constructor(private accountservice: AccountService) { }

  ngOnInit() {

  }

  edit() {
    this.accountservice.edit(this.syncAccount.getId());
  }

  delete() {
    this.accountservice.remove(this.syncAccount.getId());
  }

}
