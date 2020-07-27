import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';
import { INDUSTRY_TYPE, EXPERIENCE } from 'src/app/constant/drawer';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { ExpertService } from '../../../service/expert.service';
@Component({
  selector: 'app-add-expert',
  templateUrl: './add-expert.component.html',
  styleUrls: ['./add-expert.component.scss']
})
export class AddExpertComponent implements OnInit {
  expertForm: FormGroup;
  imageFile: any;
  industryType = INDUSTRY_TYPE;
  experienceType = EXPERIENCE;
  categoryData: any;
  profilePicURL: any;
  constructor(
    private $fb: FormBuilder,
    private $formService: FormService,
    private $category: CategoryManagementService,
    private $fileUploadService: FileUploadService,
    private $service: ExpertService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.categoryList();
  }

  createForm() {
    this.expertForm = this.$fb.group({
      categoryId: [],
      name: ['', Validators.compose(this.$formService.VALIDATION.name)],
      email: ['', Validators.compose(this.$formService.VALIDATION.email)],
      profession: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.professionMaxLength)]],
      industry: [''],
      bio: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.bioMaxLength)]],
      experience: ['']
    });
  }

  form(name) {
    return this.expertForm.controls[name];
  }

  setimageFile(event) {
    this.imageFile = event;
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
      console.log(res.data['data']);
    });
  }

async onSubmit() {
    if (this.expertForm.invalid) {
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    let body = { imageUrl: this.profilePicURL, ...this.expertForm.value };
    console.log(body);
    
    // this.$service.add(body).then(
    //   data => {
    //     this.expertForm.enable();
    //   },
    //   err => {
    //     this.expertForm.enable();
    //   });
  }

  onCancel() {
    
  }

}
