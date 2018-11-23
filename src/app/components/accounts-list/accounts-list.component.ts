import { Component, OnInit, Input } from '@angular/core';
import { Account } from "src/app/model/account";

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {

  @Input() accounts: Account[];

  constructor(){ }

  ngOnInit(){

  }

}
