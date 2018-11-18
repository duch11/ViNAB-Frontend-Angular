import { Component, OnInit } from '@angular/core';
import { ErrorService } from "src/app/services/error.service";
import { Observable, of } from 'rxjs';
import { Alert } from '../../model/alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alertsMap: Map<String, Alert>;
  alerts: Alert[];

  constructor(public errorService: ErrorService) {
  }

  close(alert: Alert) {
    this.errorService.clearError(alert);
  }

  ngOnInit() {
    this.errorService.getErrors()
      .subscribe(errors => (this.alerts = errors));
  }

}
