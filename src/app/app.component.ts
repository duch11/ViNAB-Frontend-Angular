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
  alertsEnabled: boolean;

  constructor(public errorService: ErrorService, public authService: AuthService, public router: Router) {

  }

  ngOnInit(): void {
    // if empty
    if(localStorage.getItem("alertsEnabled")){
      this.alertsEnabled = true;
    } else {
      this.alertsEnabled = Boolean(localStorage.getItem("alertsEnabled"));
    }
  }



  toggleAlerts(): string {
    this.alertsEnabled = !this.alertsEnabled;
    localStorage.setItem("alertsEnabled", this.alertsEnabled + "");
    if(this.alertsEnabled){
        return "ALERTS: ON ";
      } else {
        return "ALERTS: OFF";
      }
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate([""]);
  }
}
