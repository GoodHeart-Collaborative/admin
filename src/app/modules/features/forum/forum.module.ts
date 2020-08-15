import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './view/forum.component';
import { ForumService, ForumServiceResolve } from './service/forum.service';


@NgModule({
  declarations: [ForumComponent],
  imports: [
    CommonModule,
    ForumRoutingModule
  ],
  providers: [ ForumService , ForumServiceResolve]
})
export class ForumModule { }
