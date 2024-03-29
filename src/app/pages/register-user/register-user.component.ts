import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { User } from "src/app/model/user";
import { AuthService } from "src/app/services/auth/auth.service";
import { ErrorService } from "src/app/services/error/error.service";




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


  constructor( private router: Router, private authService: AuthService, private errorService: ErrorService) { }

  ngOnInit() {

    this.user = new User("", "", "", "");
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
    this.authService.register(this.user).subscribe((success) => {
      if(success){
        this.router.navigate(["/dashboard"]);
      }
    })
  }

}
