import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "./guards/auth.guard";

import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';



const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterUserComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'details/:id', component: AccountDetailsComponent, canActivate: [AuthGuard]},
  { path: '**', component: DashboardComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
