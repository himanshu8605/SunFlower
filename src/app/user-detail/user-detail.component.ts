import { Component, OnInit } from "@angular/core";
import { FetchRecordsService } from "../fetch-records.service";
import { Subscription } from "rxjs";
import { callbackify } from "util";
@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  name = "John Doe";
  age = 34;
  searchString = "";
  data: String;
  users = [];
  subscriptionManager: Subscription = new Subscription();

  constructor(private userService: FetchRecordsService) {
    this.cal();
  }
  cal() {
    console.log("Done");
    this.userService.getProfileUserList().subscribe(res => {
      this.users = res.login;
    });
  }

  ngOnInit(): void {
    this.data = this.userService.getData();
  }
}
