import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { AddAccountCardComponent } from './add-account-card/add-account-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterUserComponent,
    DashboardComponent,
    AccountsListComponent,
    AccountCardComponent,
    AddAccountCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
