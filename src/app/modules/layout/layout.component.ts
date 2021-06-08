import { Component, OnInit, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { CommonService } from '../shared/services/common.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layouts',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  $destroy = new Subject();
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  isFlag = false;

  constructor(private $common: CommonService) {
    this.$common.dashBoardFlag$.pipe(takeUntil(this.$destroy))
      .subscribe(
        flag => {
          this.isFlag = flag;
        });
  }

  ngOnInit() { }


  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
