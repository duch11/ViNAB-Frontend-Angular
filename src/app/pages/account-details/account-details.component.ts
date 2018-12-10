import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AccountService } from "src/app/services/account/account.service";
import { Account } from "../../model/account.interface";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit, OnDestroy {

  account: Account;
  subscription: Subscription;


  constructor(private router: Router, private accountService: AccountService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("ONINIT")

    this.route.params.subscribe(params => {
      console.log("ROUTE SUBSCRIBTION")
      this.subscription = this.accountService.accountsChanged.subscribe(
        (accounts) => {
          this.account = this.accountService.getAccount(params.id);
          console.log("Editing account: " + this.account.nickName);
        }
      );
    });
    //this.accountService.emitChanges();
    this.accountService.getAccounts();
  }

  save() {
    this.accountService.update(this.account);
    this.router.navigate(['dashboard']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}
