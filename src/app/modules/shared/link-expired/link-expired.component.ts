import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-link-expired',
  templateUrl: './link-expired.component.html',
  styleUrls: ['./link-expired.component.scss']
})
export class LinkExpiredComponent implements OnInit {

  constructor(
    private _router: Router,
    private _utilityService: UtilityService
  ) {
    if (this._router.url == '/link-expired') {
      console.log(this.linkExpired, this._router.url);
      this.linkExpired = true;
    }
  }
  linkExpired = false;
  ngOnInit() {
  }
  onBackLogin() {
    if (this._utilityService.getAuthToken()) {
      this._utilityService.clearStorage();
      this._router.navigate(["/auth/login"]);
    }else { this._router.navigate(["/auth/login"]); }
  }

}
