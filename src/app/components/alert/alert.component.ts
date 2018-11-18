import { Component, OnInit } from '@angular/core';
import { ErrorService } from "src/app/services/error.service";
import { forEach } from "@angular/router/src/utils/collection";

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alerts: Alert[];

  constructor(private errorService: ErrorService) {
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  ngOnInit() {
    for (const error of this.errorService.errors) {
      this.alerts.push({type: 'string', message: error});
    }
  }

}
