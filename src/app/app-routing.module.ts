import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecordFetchComponent } from "./record-fetch/record-fetch.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

const routes: Routes = [
  { path: "User", component: UserDetailComponent },
  { path: "", component: RecordFetchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
