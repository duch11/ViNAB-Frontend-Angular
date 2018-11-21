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

  @Input() user: User;
  constructor(private userService: UserService,
  private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  requestLogin() {
    if (this.userService.login(this.user)) {
      this.router.navigate(["dashboard"]);
    }
  }

}
