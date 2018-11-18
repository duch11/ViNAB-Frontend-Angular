import { Component } from '@angular/core';
import { ErrorService } from "./services/error.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(errorService: ErrorService) {

  }
  currentUser = 'ViNAB-Frontend-Angular';

  // temporary code for alert
  alert: boolean;



  close(): void {
    this.alert = false;
  }
}
