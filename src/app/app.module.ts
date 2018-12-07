import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { AccountCardComponent } from './components/account-card/account-card.component';
import { FormsModule } from "@angular/forms";
import { AlertComponent } from './components/alert/alert.component';
import { AuthService } from "./services/auth/auth.service";
import { AccountService } from "./services/account/account.service";




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterUserComponent,
    DashboardComponent,
    AccountCardComponent,
    AccountDetailsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
