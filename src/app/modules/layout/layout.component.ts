import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layouts',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  isFlag = false;
  ngOnInit() {
  }

  onApplyDrashbord(event) {
    console.log(event);
    this.isFlag = event;
   }

}
