import { Component, OnInit, Input } from '@angular/core';
import { User } from "src/app/model/user";
import { UserService } from "src/app/services/user/user.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: User;
  loading: boolean = false;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.user = new User("", "", "", "");

  }

  requestLogin() {
    this.loading = true;

    this.authService.doLogin(this.user).subscribe( (valid: boolean) => {
      if(valid){
        this.router.navigate(["dashboard"]);
      } else {
        this.loading = false;
      }
    });
     /*  () => {
          if (isvalid){
            this.router.navigate(["dashboard"]);
          } else {
            this.loading = false;
          }
        },
      (error) => {
        console.log(error);
      }
    ); */

  }

}
