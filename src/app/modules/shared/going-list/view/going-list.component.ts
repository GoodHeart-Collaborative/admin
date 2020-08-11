import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { USER } from 'src/app/constant/routes';

@Component({
  selector: 'app-going-list',
  templateUrl: './going-list.component.html',
  styleUrls: ['./going-list.component.scss']
})
export class GoingListComponent implements OnInit {

  constructor(
    private $dialogRef: MatDialogRef<GoingListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = {},
    private $router: Router
  ) { }

  ngOnInit() { }

  onSeeProfile(id: string) {
      this.$router.navigate([`${USER.fullUrl}`, id, 'details']);
      this.$dialogRef.close();
  }

}

