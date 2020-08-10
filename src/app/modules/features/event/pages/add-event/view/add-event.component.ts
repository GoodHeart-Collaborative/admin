import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';
import { EventService } from '../../../service/event.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { invalidImageError, invalidFileSize } from 'src/app/constant/messages';
import { EVENTS } from 'src/app/constant/routes';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { onSelectFile } from 'src/app/constant/file-input';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { PRAVICY , EVENT_CATEGORY } from 'src/app/constant/drawer';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;
  imageFile: any;
  categoryData: any;
  profilePicURL: any;
  details: any;
  privacyData = PRAVICY;
  eventCategory = EVENT_CATEGORY;
  today = new Date();
  location: {};
  constructor(
    private $fb: FormBuilder,
    private $category: CategoryManagementService,
    private $fileUploadService: FileUploadService,
    private $service: EventService,
    private $utility: UtilityService,
    private $route: Router,
    private $formService: FormService,
    activateRoute: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.eventForm = this.$fb.group({
      eventCategory: [],
      title: ['', Validators.compose(this.$formService.VALIDATION.name)],
      privacy: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.priceMaxLength)]],
      eventUrl: ['', Validators.compose(this.$formService.VALIDATION.email)],
      description: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.descriptionMaxLength)]],
      allowSharing: [true],
      location: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  form(name) {
    return this.eventForm.controls[name];
  }

  get startDate() {
    return this.eventForm.controls['startDate'];
  }
  get endDate() {
    return this.eventForm.controls['endDate'];
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
    if (this.eventForm.invalid) {
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    if (!this.profilePicURL) {
      this.$fileUploadService.showAlert('Profile pic is required');
      return;
    }
    let body = { imageUrl: this.profilePicURL, ...this.eventForm.value };
    if (this.location) {      
        body.location = this.location;
    }

    if (this.details && this.details._id) {
      delete body.type;
      // this.$service.edit(this.details._id, body).then(
      //   data => {
      //     this.eventForm.enable();
      //     this.$utility.success(data.message);
      //     this.$route.navigate([EVENTS.fullUrl]);
      //   },
      //   err => {
      //     this.eventForm.enable();
      //   });
      return;
    }
    console.log(body);
    this.$service.add(body).then(
      data => {
        this.eventForm.enable();
        this.$utility.success(data.message);

        this.$route.navigate([EVENTS.fullUrl]);

      },
      err => {
        this.eventForm.enable();
      });
  }

  onCancel() {
    this.$route.navigate([EVENTS.fullUrl]);
  }


  selectLocation(event) {
    this.location = {
      address: event.formatted_address,
      type: "Point",
      // type: event.postal_code,
      coordinates: {
        longitude: event.lng,
        latitude: event.lat
      }
    };
  }
}
