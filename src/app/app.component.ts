import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser = 'ViNAB-Frontend-Angular';

  // temporary code for alert
  alert = true;
  close(): void {
    this.alert = false;
  }
}
