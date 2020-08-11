import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';
import { EventService } from '../../../service/event.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { EVENTS } from 'src/app/constant/routes';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { requiredProfilePic } from 'src/app/constant/messages';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { PRAVICY, EVENT_CATEGORY } from 'src/app/constant/drawer';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;
  imageFile: any;
  profilePicURL: any;
  privacyData = PRAVICY;
  eventCategory = EVENT_CATEGORY;
  today = new Date();
  location: {};
  eventDetails: any;
  address: any;
  constructor(
    private $fb: FormBuilder,
    private $fileUploadService: FileUploadService,
    private $service: EventService,
    private $utility: UtilityService,
    private $route: Router,
    private $formService: FormService,
    activateRoute: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
  ) {
    this.createForm();
    if (activateRoute.snapshot.data.eventDetails && activateRoute.snapshot.data.eventDetails.data) {
      this.eventDetails = activateRoute.snapshot.data.eventDetails.data;
      $breadcrumb.replace(this.eventDetails.id, this.eventDetails.title);
      this.setEditFormHandler();
    }
  }

  ngOnInit() {
  }

  setEditFormHandler() {
    if (this.eventDetails) {
      this.eventForm.patchValue(this.eventDetails);
      if (this.eventDetails.location) {
        this.eventForm.get('location').patchValue(this.eventDetails.location);
        this.eventForm.get('address').patchValue(this.eventDetails.address);
      }
      if (this.eventDetails.imageUrl) {
        this.profilePicURL = this.eventDetails.imageUrl;
      }
    }
  }
  createForm() {
    this.eventForm = this.$fb.group({
      eventCategory: [null, Validators.required],
      title: ['', Validators.compose(this.$formService.VALIDATION.name)],
      privacy: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.priceMaxLength)]],
      eventUrl: ['', Validators.compose(this.$formService.VALIDATION.email)],
      description: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.descriptionMaxLength)]],
      allowSharing: [true],
      location: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      address: ['']
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
      this.eventForm.markAllAsTouched();
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    if (!this.profilePicURL) {
      this.$fileUploadService.showAlert(requiredProfilePic);
      return;
    }
    let body = { imageUrl: this.profilePicURL, ...this.eventForm.value };
    if (this.location && this.address) {
      body.location = this.location;
      body.address = this.address
    }

    if (this.eventDetails && this.eventDetails._id) {
      this.$service.edit(this.eventDetails._id, body).then(
        data => {
          this.eventForm.enable();
          this.$utility.success(data.message);
          this.$route.navigate([EVENTS.fullUrl]);
        },
        err => {
          this.eventForm.enable();
        });
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
      type: "Point",
      coordinates: [
        event.lng, event.lat
      ]
    };
    this.address = event.formatted_address;
  }
}
