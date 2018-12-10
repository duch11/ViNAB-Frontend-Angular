import { Component, OnInit, Input } from '@angular/core';
import { Account } from "src/app/model/account.interface";
import { AccountService } from "src/app/services/account/account.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  @Input() account: Account;
  constructor(private accountService: AccountService,
  private router: Router) { }

  ngOnInit() {

  }

  edit(account: Account) {
    this.router.navigate(["details", account._id]);
  }

  delete(account: Account) {
    this.accountService.delete(account);
  }



}
