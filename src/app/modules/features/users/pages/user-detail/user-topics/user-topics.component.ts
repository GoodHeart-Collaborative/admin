import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-topics',
  templateUrl: './user-topics.component.html',
  styleUrls: ['./user-topics.component.scss']
})
export class UserTopicsComponent implements OnInit {

  isProcessing: boolean = false;
  @Input() data;
 constructor(private $router: Router) { }

 ngOnInit() {
 }
 onClick() {
   this.$router.navigate([`admin/users/${this.data._id}/topic/details`]);

 }

}
