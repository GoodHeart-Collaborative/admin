import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';

@Component({
  selector: 'app-add-expert-content',
  templateUrl: './add-expert-content.component.html',
  styleUrls: ['./add-expert-content.component.scss']
})
export class AddExpertContentComponent implements OnInit {
  expertContentForm: FormGroup;
  categoryData: any;
  constructor(
    private $fb: FormBuilder,
    private $category: CategoryManagementService,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.expertContentForm = this.$fb.group({
      expertId: [],
      categoryId: [],
      price: [],
      contentId: [],
      mediaType: [],
      description: [],
      privacy: []
    });
  }

  form(name) {
    return this.expertContentForm.controls[name];
  }
/**
 * API hit for Category
 */
  categoryList() {
    const params = {
      page: 1,
      limit: 100,
    };
    this.$category.queryData(params).then(res => {
      this.categoryData = res.data['data'];
    });
  }
}
