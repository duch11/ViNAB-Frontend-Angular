import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errors: string[];
  hasUnread: boolean;

  constructor() { }

  tellError(errorMessage: string) {
    console.log(errorMessage);
    this.errors.push(errorMessage);
  }

}
