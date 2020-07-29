import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { VALIDATION_CRITERIA, getTrimmed } from 'src/app/constant/validation-criteria';
import { ArticleManagementService } from '../../../service/article-management.service';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ARTICLES } from 'src/app/constant/routes';

@Component({
  selector: 'app-add-article-management',
  templateUrl: './add-article-management.component.html',
  styleUrls: ['./add-article-management.component.scss']
})
export class AddArticleManagementComponent implements OnInit {
  articleForm: FormGroup;
  profilePicURL: any;
  imageFile: any;
  articleDetails: any;
  descriptionMaxLength = VALIDATION_CRITERIA.descriptionMaxLength;
  titleMaxLength = VALIDATION_CRITERIA.titleMaxLength;

  constructor(
    private $formBuilder: FormBuilder,
    private $daily: ArticleManagementService,
    private $fileUploadService: FileUploadService,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $utility: UtilityService,
    private $route: Router

  ) {
    if ($router.snapshot.data.dailyData && $router.snapshot.data.dailyData.data) {
      this.articleDetails = $router.snapshot.data.dailyData.data;
      $breadcrumb.replace(this.articleDetails.id, this.articleDetails.title);
    }
  }

  ngOnInit() {
    this.createForm();
    this.getArticle();
  }

  createForm() {
    this.articleForm = this.$formBuilder.group(
      {
        title: ['', [Validators.required, Validators.maxLength(this.titleMaxLength)]],
        description: ['', [Validators.required, Validators.maxLength(this.descriptionMaxLength)]],
      });
  }

  form(name) {
    return this.articleForm.controls[name];
  }



  getArticle() {
    if (this.articleDetails) {
      this.profilePicURL = this.articleDetails.imageUrl;
      this.articleForm.patchValue(this.articleDetails);
    }
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
    if (this.articleForm.invalid) {
      this.articleForm.markAllAsTouched();
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    const body = { imageUrl: this.profilePicURL, ...this.articleForm.value };
    this.articleForm.disable();
    getTrimmed(body);
    if (this.articleDetails && this.articleDetails._id) {
      body.status = this.articleDetails.status;
      this.$daily.editCategory(this.articleDetails._id, body).then(
        data => {
          this.articleForm.enable();
          this.$utility.success(data.message);
          this.$route.navigate([ARTICLES.fullUrl]);
        },
        err => {
          this.articleForm.enable();
        }
      );
      return;
    }
    this.$daily.addCategory(body).then(
      data => {
        this.articleForm.enable();
        this.$utility.success(data.message);
        this.$route.navigate([ARTICLES.fullUrl]);
      },
      err => {
        this.articleForm.enable();

      }
    );
  }


  onCancel() {
    this.$route.navigate([ARTICLES.fullUrl]);
  }
}
