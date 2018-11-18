import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error: string;
  hasUnread: boolean;

  constructor() { }

  tellError(errorMessage: string) {
    console.log(errorMessage);
    this.error = errorMessage;
  }


}
