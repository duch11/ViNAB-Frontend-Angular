import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user/user.service";
import { User } from "src/app/model/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.user = this.userservice.getUser(1);
  }

}
