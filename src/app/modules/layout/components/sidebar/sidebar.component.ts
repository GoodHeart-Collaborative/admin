import { Component, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  flag = true;
  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  sidebarCollaped() {
    if (this.flag === true) {
      this.renderer.addClass(document.body, "collapsed");
      this.flag = !this.flag;
    } else {
      this.renderer.removeClass(document.body, "collapsed");
      this.flag = !this.flag;
    }
  }


}
