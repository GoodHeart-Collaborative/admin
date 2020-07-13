import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-article-management',
  templateUrl: './add-article-management.component.html',
  styleUrls: ['./add-article-management.component.scss']
})
export class AddArticleManagementComponent implements OnInit {
  adviceForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  onCancel() {

  }

  onSubmit() {
    
  }
}
