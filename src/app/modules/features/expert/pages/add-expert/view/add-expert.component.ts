import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';
import { INDUSTRY_TYPE, EXPERIENCE, PROFESSION } from 'src/app/constant/drawer';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { ExpertService } from '../../../service/expert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EXPERT } from 'src/app/constant/routes';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';

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
  professionType = PROFESSION;
  categoryData: any;
  profilePicURL: any;
  details: any;
  nameMaxLenght = VALIDATION_CRITERIA.nameMaxLength;
  emailMaxLenght = VALIDATION_CRITERIA.emailMaxLength;
  bioMaxLength = VALIDATION_CRITERIA.bioMaxLength;
  constructor(
    private $fb: FormBuilder,
    private $formService: FormService,
    private $category: CategoryManagementService,
    private $fileUploadService: FileUploadService,
    private $service: ExpertService,
    private $utility: UtilityService,
    private $route: Router,
    activateRoute: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
  ) {
    this.createForm();
    if (activateRoute.parent.snapshot && activateRoute.parent.snapshot.data && activateRoute.parent.snapshot.data.expertData) {
      this.details = activateRoute.parent.snapshot.data.expertData.data[0];
      $breadcrumb.replace(this.details._id, this.details.name);
      this.patchValueInForm();
    }
  }
  patchValueInForm() {
    if (this.details) {

      this.expertForm.patchValue(this.details);
      if (this.details.profilePicUrl) {
        this.profilePicURL = this.details.profilePicUrl[0];
      }
      if (this.details.email) {
        this.expertForm.get('email').disable();
      }
      if (this.details.categoryData) {
        this.categoryData = this.details.categoryData;
      }
    }
  }

  ngOnInit() {
    this.categoryList();
  }

  createForm() {
    this.expertForm = this.$fb.group({
      categoryId: ['', Validators.required],
      name: ['', Validators.compose(this.$formService.VALIDATION.name)],
      email: ['', Validators.compose(this.$formService.VALIDATION.email)],
      profession: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.professionMaxLength)]],
      industry: [null, Validators.required],
      bio: ['', [Validators.required, Validators.maxLength(this.bioMaxLength)]],
      experience: ['', Validators.required]
    });
  }

  form(name) {
    return this.expertForm.controls[name];
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

  setimageFile(event) {
    if (!event) {
      this.imageFile = null;
      this.profilePicURL = '';
      return;
    }
    this.imageFile = event;
  }

  async onSubmit() {
    if (this.expertForm.invalid) {
      this.expertForm.markAllAsTouched();
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    if (!this.profilePicURL) {
      this.$fileUploadService.showAlert('Image is required');
      return;
    }
    let body = { profilePicUrl: [this.profilePicURL], ...this.expertForm.value };
    if (this.details && this.details._id) {
      this.$service.edit(this.details._id, body).then(
        data => {
          this.expertForm.enable();
          this.$utility.success(data.message);
          this.$route.navigate([EXPERT.fullUrl]);
        },
        err => {
          this.expertForm.enable();
        }
      );
      return;
    }
    this.$service.add(body).then(
      data => {
        this.expertForm.enable();
        this.$utility.success(data.message);

        this.$route.navigate([EXPERT.fullUrl]);
      },
      err => {
        this.expertForm.enable();
      });
  }

  onCancel() {
    this.$route.navigate([EXPERT.fullUrl]);
  }

  onKeydown(event) {
    event.preventDefault();
  }

}
