import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';



const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'details', component: AccountDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
