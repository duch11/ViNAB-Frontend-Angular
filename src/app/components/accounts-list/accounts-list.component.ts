import { Component, OnInit, Input } from '@angular/core';
import { SyncPairAccount } from "src/app/model/sync-pair-account";

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {

  @Input() sp_accounts: SyncPairAccount[];

  constructor(){ }

  ngOnInit(){

  }

}
