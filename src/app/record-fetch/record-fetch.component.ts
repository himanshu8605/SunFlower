import { Component, OnInit, OnDestroy } from "@angular/core";
import { FetchRecordsService } from "../fetch-records.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
@Component({
  selector: "app-record-fetch",
  templateUrl: "./record-fetch.component.html",
  styleUrls: ["./record-fetch.component.css"]
})
export class RecordFetchComponent implements OnInit, OnDestroy {
  name = "John Doe";
  age = 34;
  searchString = "";
  users = [];
  subscriptionManager: Subscription = new Subscription();

  constructor(
    private userService: FetchRecordsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.handleButtonClick();
  }

  handleButtonClick() {
    this.getUsers(null);
  }

  UserProfile(usr) {    
    this.userService.setData(usr);
    this.router.navigateByUrl("/User");
  }

  Search() {
    this.getUsers(this.searchString);
  }

  getUsers(searchValue: string) {
    this.users = [];
    this.subscriptionManager.add(
      this.userService.getUserList(searchValue).subscribe(res => {
        console.log(res);
        if (res && res.items) {
          this.users = res.items;
        }
      })
    );
  }

  ngOnDestroy() {
    if (this.subscriptionManager) {
      this.subscriptionManager.unsubscribe();
    }
  }
}
