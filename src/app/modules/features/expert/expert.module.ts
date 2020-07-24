import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertRoutingModule } from './expert-routing.module';
import { ExpertComponent } from './expert.component';
import { ExpertServiceResolve, ExpertService } from './service/expert.service';


@NgModule({
  declarations: [ExpertComponent],
  imports: [
    CommonModule,
    ExpertRoutingModule,
  ],
  providers : [ExpertServiceResolve, ExpertService]
})
export class ExpertModule { }
