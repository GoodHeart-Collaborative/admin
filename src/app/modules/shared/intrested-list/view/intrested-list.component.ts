import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { USER } from 'src/app/constant/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intrested-list',
  templateUrl: './intrested-list.component.html',
  styleUrls: ['./intrested-list.component.scss']
})
export class IntrestedListComponent implements OnInit {

  constructor(
    private $dialogRef: MatDialogRef<IntrestedListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = {},
    private $router: Router
  ) { }

  ngOnInit() { }

  onSeeProfile(id: string) {
      this.$router.navigate([`${USER.fullUrl}`, id, 'details']);
      this.$dialogRef.close();
  }

}
