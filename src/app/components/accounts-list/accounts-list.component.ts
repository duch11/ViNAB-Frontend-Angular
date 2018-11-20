import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { SyncPairAccount } from "src/app/model/sync-pair-account";

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {

  currentUserAccounts: SyncPairAccount[];
  constructor(private userservice: UserService) { }

  ngOnInit() {
    // not working
    this.currentUserAccounts = this.userservice.getUser(1).sync_pairs;
  }

}
