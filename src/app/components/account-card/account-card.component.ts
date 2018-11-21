import { Component, OnInit, Input } from '@angular/core';
import { SyncPairAccount } from "src/app/model/sync-pair-account";

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  @Input() syncAccount: SyncPairAccount;
  constructor() { }

  ngOnInit() {

  }

}
