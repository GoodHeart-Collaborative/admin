import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  flag = 1;
  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

}
