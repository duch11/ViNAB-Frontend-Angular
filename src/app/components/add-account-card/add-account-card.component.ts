import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from "src/app/services/account/account.service";
import { User } from "src/app/model/user";

@Component({
  selector: 'app-add-account-card',
  templateUrl: './add-account-card.component.html',
  styleUrls: ['./add-account-card.component.scss']
})
export class AddAccountCardComponent implements OnInit {

  @Input() user: User;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  addAccount() {
    this.accountService.createAccount("1");
  }

}
