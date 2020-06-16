import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { UserRouting } from "./user.routing";
import { RouterModule } from "@angular/router";
import { MatSelectModule } from "@angular/material";

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRouting, RouterModule, MatSelectModule],
})
export class UserModule {}
