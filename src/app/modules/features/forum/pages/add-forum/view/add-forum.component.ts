import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { EventService } from 'src/app/modules/features/event/service/event.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { FORUM } from 'src/app/constant/routes';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';
import { ForumService } from '../../../service/forum.service';
import { requiredMedia } from 'src/app/constant/messages';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.scss']
})
export class AddForumComponent implements OnInit {
  forumForm: FormGroup;
  descriptionMaxLength = VALIDATION_CRITERIA.descriptionMaxLength;
  titleMaxLength = VALIDATION_CRITERIA.titleMaxLength;
  imageFile: any;
  profilePicURL: any;
  categoryData: any[];
  forumsData: any;
  thumbnailUrl: string;
  constructor(
    private $fb: FormBuilder,
    private $fileUploadService: FileUploadService,
    private $service: ForumService,
    private $utility: UtilityService,
    private $route: Router,
    private $category: CategoryManagementService,
    activateRoute: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
  ) {
    this.createForm();
    if (activateRoute.snapshot && activateRoute.snapshot.data &&
      activateRoute.snapshot.data.forumData && activateRoute.snapshot.data.forumData.data) {
      this.forumsData = activateRoute.snapshot.data.forumData.data;
      // $breadcrumb.replace(this.forumsData._id, this.forumsData.topic);
      this.forumPatchData();
    }
  }

  ngOnInit() {
    this.categoryList();
  }

  forumPatchData() {
    this.forumForm.patchValue(this.forumsData);
    if (this.forumsData.mediaUrl) {
      this.profilePicURL = this.forumsData.mediaUrl;
    }
    // if (this.forumsData && this.forumsData.mediaUrl) {
    //   this.profilePicURL = this.forumsData.mediaUrl;
    // }
  }

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



  createForm() {
    this.forumForm = this.$fb.group({
      description: ['', [Validators.required, Validators.maxLength(this.descriptionMaxLength)]],
      categoryId: ['', Validators.required],
      categoryName: [''],
      userType: ['admin'],
      postAnonymous: [false]
    });
  }

  form(name) {
    return this.forumForm.controls[name];
  }

  /**
   * setting Image in ImageFile
   *
   */
  // setimageFile(event) {
  //   if (!event) {
  //     this.imageFile = null;
  //     this.profilePicURL = '';
  //     this.thumbnailUrl = '';
  //     return;
  //   }
  //   event.type === 1 ? this.thumbnailUrl = '' : this.profilePicURL = '';
  //   this.imageFile = event;
  // }

  setimageFile(event) {
    if (!event) {
      this.imageFile = null;
      this.profilePicURL = '';
      return;
    }
    this.imageFile = event;
  }

  async onSubmit() {
    if (this.forumForm.invalid) {
      this.forumForm.markAllAsTouched();
      return;
    }
    // if (this.imageFile) {
    //   if (this.imageFile && this.imageFile.type == 1) {
    //     const data: any = await this.$fileUploadService.uploadFile(this.imageFile.file);
    //     const url = data.Location;
    //     body['mediaUrl'] = url;
    //     body.mediaType = this.imageFile.type;
    //   }
    //   if (this.imageFile && this.imageFile.type == 2) {
    //     const dataForVideo: any = await this.$fileUploadService.uploadFile(this.imageFile.videoFile);
    //     const dataForThumb: any = await this.$fileUploadService.uploadFile(this.imageFile.thumbNailFile);
    //     body['mediaUrl'] = dataForVideo.Location;
    //     body['thumbnailUrl'] = dataForThumb.Location;
    //     body.mediaType = this.imageFile.type;
    //   }
    // } else if (this.forumsData) {
    //   if (this.forumsData.mediaType == 1) {
    //     if (this.profilePicURL) {
    //       body['mediaUrl'] = this.profilePicURL;
    //       body.mediaType = this.forumsData.mediaType;
    //     } else {
    //       delete body.mediaType;
    //       body['mediaUrl'] = '';
    //     }
    //   }
    //   if (this.forumsData.mediaType == 2) {
    //     if (this.thumbnailUrl) {
    //       body['mediaUrl'] = this.forumsData.mediaUrl;
    //       body['thumbnailUrl'] = this.thumbnailUrl;
    //       body.mediaType = this.forumsData.mediaType;
    //     } else {
    //       delete body.mediaType;
    //       body['mediaUrl'] = '';
    //       body['thumbnailUrl'] = '';
    //     }
    //   }
    // }
        // if (!body.mediaUrl) {
    //   this.$fileUploadService.showAlert(requiredMedia);
    //   return;
    // }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    if (!this.profilePicURL) {
      this.$fileUploadService.showAlert(requiredMedia);
      return;
    }

    let body = { mediaUrl: this.profilePicURL, ...this.forumForm.value };

    body.categoryName = this.categoryData.find(categgory => categgory._id === body.categoryId).name;
    if (this.forumsData && this.forumsData._id) {
      this.$service.edit(this.forumsData._id, body).then(
        data => {
          this.forumForm.enable();
          this.$utility.success(data.message);
          this.$route.navigate([FORUM.fullUrl]);
        },
        err => {
          this.forumForm.enable();
        });
      return;
    }
    console.log(body);
    this.$service.add(body).then(
      data => {
        this.forumForm.enable();
        this.$utility.success(data.message);
        this.$route.navigate([FORUM.fullUrl]);

      },
      err => {
        this.forumForm.enable();
      });
  }

  onCancel() {
    this.$route.navigate([FORUM.fullUrl]);
  }
}
