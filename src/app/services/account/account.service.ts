import { Injectable } from '@angular/core';
import { ErrorService } from "../error/error.service";
import { Alert } from "../../model/alert.interface";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private errorservice: ErrorService) { }

  edit(sync_id: string) {
    this.errorservice.tellError({type: "success", message: "accountservice.edit() works! Sync_id: " + sync_id});
  }
  remove(sync_id: string) {
    this.errorservice.tellError({type: "success", message: "accountservice.remove() works! Sync_id: " + sync_id});
  }
}
