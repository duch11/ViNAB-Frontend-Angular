import { Component, OnInit, Input } from '@angular/core';
import { User } from "src/app/model/user";
import { NgModel } from "@angular/forms";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})

export class RegisterUserComponent implements OnInit {
  @Input() user: User;
  @Input() passwordcheck: string;

  validForm: boolean;


  constructor() { }

  ngOnInit() {
    this.user = new User();
    this.passwordcheck = "";
  }

  formIsValid(): boolean {
    this.validForm = false;
    if (this.user.password === this.passwordcheck) {
      this.validForm = true;
    }

    return this.validForm;

  }

}
