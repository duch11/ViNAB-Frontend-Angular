import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';
// components
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { AddAccountCardComponent } from './components/add-account-card/add-account-card.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterUserComponent,
    DashboardComponent,
    AccountsListComponent,
    AccountCardComponent,
    AddAccountCardComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
