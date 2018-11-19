import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alert } from '../model/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errors: Alert[] = [];

  constructor() {
  }

  tellError(error: Alert) {
    if (!this.errorExists(error)) {
      this.errors.push(error);
    }
  }

  private errorExists(error: Alert): boolean {
    if (this.errors.find(x => x.message === error.message)) {
      return true;
    }
    return false;
  }

  clearError(error: Alert) {
    if (this.errorExists(error)) {
      this.errors.splice(this.errors.indexOf(error), 1);
    }
  }

  getErrors(): Observable<Alert[]> {
    return of(this.errors);
  }

}
