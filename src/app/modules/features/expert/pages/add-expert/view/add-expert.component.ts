import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';
import { INDUSTRY_TYPE, EXPERIENCE } from 'src/app/constant/drawer';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { ExpertService } from '../../../service/expert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EXPERT } from 'src/app/constant/routes';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { onSelectFile } from 'src/app/constant/file-input';
import { invalidImageError, invalidFileSize } from 'src/app/constant/messages';

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
  details: any;
  constructor(
    private $fb: FormBuilder,
    private $formService: FormService,
    private $category: CategoryManagementService,
    private $fileUploadService: FileUploadService,
    private $service: ExpertService,
    private $route: Router,
    private $utility: UtilityService,
    activateRoute: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    global: GlobalService,
  ) {
    this.createForm();

    activateRoute.queryParams.subscribe(({ application }) => {
      if (!application) {
        return;
      }
      if (application) {
        this.details = global.decodeData(application);
        console.log(this.details);
        $breadcrumb.replace(this.details._id, this.details.contentDisplayName);
        this.expertForm.patchValue(this.details);
        if (this.details && this.details.profilePicUrl) {
            this.profilePicURL = this.details.profilePicUrl;
        }
      }
    });
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

  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.profilePicURL = result.url;
    } catch (err) {
      if (err.type) {
        this.$category.showAlert(invalidImageError());
      } else if (err.size) {
        this.$category.showAlert(invalidFileSize());
      }
    }
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
    let body = { profilePicUrl: [this.profilePicURL], ...this.expertForm.value };
    console.log(body);
    if (this.details && this.details._id) {
      delete body.type;
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

}
