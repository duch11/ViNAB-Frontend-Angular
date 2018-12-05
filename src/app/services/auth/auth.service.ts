import { Injectable } from '@angular/core';
import { User } from "src/app/model/user";
import { ErrorService } from "../error/error.service";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private sessionValidity: boolean;
  private user: User;

  constructor(private errorService: ErrorService, private http: HttpClient) {


   }

  // to actually log-in!
  doLogin(user: User): Observable<boolean> {
    const REQUEST = this.http.post(environment.apiUrl + '/user/login',
      {
        email: user.email,
        password: user.password
      }
    ); // end of REQUEST

    return new Observable<boolean>((observer) => {
      REQUEST.subscribe(

      // if res.status(200) (User is valid)
      (resp: User) => {
        console.log("user.service.doLogin(): Got response: " + resp.name + " " + resp.email + resp._id);

        this.sessionValidity = true;
        this.user = resp;
        localStorage.setItem("sessionKey", resp._id);
        localStorage.setItem("sessionActive", "true");
        observer.next(this.sessionValidity);
        // (resp && resp.user && resp.user.name) ? "Welcome ${resp.user.name}" : "Logged in!"
      },

      // if res.status(403) (User invalid!) (and maybe an 'errorMessage' variable)
      (errorResp) => {
        console.log("user.service.doLogin(): Got error: " + errorResp.message +" body: "+ errorResp.body);
        this.sessionValidity = false;

        localStorage.setItem("sessionKey", "");
        localStorage.setItem("sessionActive", "false");
        observer.next(this.sessionValidity);
        // errorResp.error ? errorResp.error.errorMessage : "An unknown error has occured."
      }); // end of subscribe
    }); // end of new observable

    // Request is sent, when we subscribe to it!
  } // end of doLogin()

  sessionValid(): boolean {
    if (localStorage.getItem("sessionActive") === "true" && localStorage.getItem("sessionKey") !== "") {
      // here code that fetches the user could go
      this.sessionValidity = true;
    } else {
      this.sessionValidity = false;
    }
    return this.sessionValidity;
  }
} // end of auth service

