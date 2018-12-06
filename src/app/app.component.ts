import { Component } from '@angular/core';
import { ErrorService } from "./services/error/error.service";
import { AuthService } from "./services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public errorService: ErrorService, private authService: AuthService, private router: Router) {

  }

  // temporary code for alert
  alert: boolean;

  close(): void {
    this.alert = false;
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate([""]);
  }
}
