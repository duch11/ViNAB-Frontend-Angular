import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { User } from "src/app/model/user";
import { UserService } from "src/app/services/user/user.service";



const closed_eye  = "fa fa-eye-slash";
const open_eye    = "fa fa-eye";
const show_pw     = "text";
const hide_pw     = "password";
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  user: User;

  property_type_password: string;
  property_class_eye: string;


  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.user = new User();
    this.property_type_password     = hide_pw;
    this.property_class_eye         = closed_eye;
  }


  togglePassword() {
    if (this.property_type_password === hide_pw) {
      this.property_type_password   = show_pw;
      this.property_class_eye       = open_eye;
    } else {
      this.property_type_password   = hide_pw;
      this.property_class_eye       = closed_eye;
    }
  }

  // submit button
  registerUser() {
    if (this.userService.addUser(this.user)) {
      this.router.navigate(["/"]);
    }

  }

}
