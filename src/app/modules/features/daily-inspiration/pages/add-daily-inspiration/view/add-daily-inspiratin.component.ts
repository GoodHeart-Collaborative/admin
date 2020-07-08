import { Component, OnInit, Inject } from '@angular/core';
import { DailyInspirationService } from '../../../service/daily-inspiration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { onSelectFile } from 'src/app/constant/file-input';
import { invalidImageError, invalidFileSize } from 'src/app/constant/messages';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-add-daily-inspiratin',
  templateUrl: './add-daily-inspiratin.component.html',
  styleUrls: ['./add-daily-inspiratin.component.scss']
})
export class AddDailyInspiratinComponent implements OnInit {
  today: Date = new Date();
  inspirationForm: FormGroup;
  profilePicURL: any;
  imageFile: any;
  dailyInspirationDetails: any;
  postDate: boolean = false;
  constructor(
              private $formBuilder: FormBuilder,
              private $daily: DailyInspirationService,
              private $fileUploadService: FileUploadService,
              $router: ActivatedRoute,
              $breadcrumb: BreadcrumbService

              ) {
                if ($router.snapshot.data.dailyData && $router.snapshot.data.dailyData.data) {

                  this.dailyInspirationDetails = $router.snapshot.data.dailyData.data;
                  $breadcrumb.replace(this.dailyInspirationDetails.id, this.dailyInspirationDetails.title);
                }
              }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.inspirationForm = this.$formBuilder.group(
      {
        title: ['', Validators.required],
        isPostLater: [false],
        createdAt: [],
        description: [''],
      });
  }
  checkMe(date) {
    console.log(date);
    this.postDate = true;
  }

  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.profilePicURL = result.url;
    } catch (err) {
      if (err.type) {
        this.$daily.showAlert(invalidImageError());
      } else if (err.size) {
        this.$daily.showAlert(invalidFileSize());
      }
    }
  }


  async onSubmit() {
    if (this.inspirationForm.invalid) {
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    let body = { imageUrl: this.profilePicURL, ...this.inspirationForm.value };
    this.inspirationForm.disable();
    if (this.dailyInspirationDetails && this.dailyInspirationDetails._id) {
      this.$daily.editCategory(this.dailyInspirationDetails._id, body).then(
        data => {
          this.inspirationForm.enable();
        },
        err => {
          this.inspirationForm.enable();
        }
      );
      return;
    }
    this.$daily.addCategory(body).then(
      data => {
        this.inspirationForm.enable();
      },
      err => {
        this.inspirationForm.enable();
      }
    );
  }



//   getCategoryDetail() {
//     this.categoryForm.patchValue({
//             title: this.data.title
//           });
//     this.profilePicURL = this.data.imageUrl;
// }

  onCancel() {
  }



}
