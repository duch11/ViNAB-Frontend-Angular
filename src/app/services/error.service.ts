import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alert } from '../model/alert.interface';
import { Alert } from "selenium-webdriver";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errors: Alert[] = [];

  constructor() {
  }

  tellError(errorMessage: string) {
    console.log(errorMessage);
    if(!this.errors.find(x => x.message === errorMessage)){
      this.errors.push({type: "warning", message: errorMessage});
    }
  }

  clearError(error: Alert) {
    this.errors.splice(this.errors.indexOf(error));
  }

  getErrors(): Observable<Alert[]> {
    return of(this.errors);
  }

}
