import { Component } from '@angular/core';
import { ErrorService } from "./services/error/error.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public errorService: ErrorService) {

  }
  currentUser = 'ViNAB-Frontend-Angular';

  // temporary code for alert
  alert: boolean;

  close(): void {
    this.alert = false;
  }
}
