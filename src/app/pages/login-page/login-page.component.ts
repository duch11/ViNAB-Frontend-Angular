import { Component, OnInit, Input } from '@angular/core';
import { User } from "src/app/model/user";
import { UserService } from "src/app/services/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: User;
  constructor(private userService: UserService,
  private router: Router) { }

  ngOnInit() {
    this.user = new User("","","","");
  }

  requestLogin() {
    this.userService.login(this.user).subscribe(
      (user) => {
          this.user = user;
          this.router.navigate(["dashboard"]);
        },
      (error) => {}
    );

    if (this.userService.login(this.user)) {

    }
  }

}
