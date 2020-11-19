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
import { PRAVICY, EVENT_CATEGORY } from 'src/app/constant/drawer';
import { PATTERN } from 'src/app/constant/patterns';
import { CATEGORY_TYPE } from 'src/app/constant/app-constant';

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
  eventCategory = [];
  today = new Date();
  location: {};
  eventDetails: any;
  address: any;
  descriptionMaxLength = VALIDATION_CRITERIA.eventDescriptionMaxLength;
  eventNameMaxlength = VALIDATION_CRITERIA.eventNameMaxlength;
  priceMaxLength = VALIDATION_CRITERIA.priceMaxLength;
  maxDate: Date;
  minStartDate: Date;
  minEndDate: Date;
  constructor(
    private $fb: FormBuilder,
    private $service: EventService,
    private $fileUploadService: FileUploadService,
    private $utility: UtilityService,
    private $route: Router,
    activateRoute: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $category: CategoryManagementService
  ) {
    this.categoryList();
    this.maxDate = new Date(new Date().getTime() + 2592000000);
    this.createForm();
    if (activateRoute.snapshot.data.eventDetails && activateRoute.snapshot.data.eventDetails.data) {
      this.eventDetails = activateRoute.snapshot.data.eventDetails.data;
      $breadcrumb.replace(this.eventDetails._id, this.eventDetails.title);
      this.setEditFormHandler();
    }
  }

  ngOnInit() {

  }

  setEditFormHandler() {
    if (this.eventDetails) {
      if (this.eventDetails.isExpired) {
        this.$route.navigate([EVENTS.fullUrl]);
        return;
      } else if (Date.now() > new Date(this.eventDetails.startDate).getTime()) {
        this.eventForm.get('startDate').disable();
      }
      this.eventForm.patchValue(this.eventDetails);
      if (this.eventDetails.address) {
        this.eventForm.get('location').patchValue(this.eventDetails.location);
        this.eventForm.get('address').patchValue(this.eventDetails.address);
      }
      if (this.eventDetails.imageUrl) {
        this.profilePicURL = this.eventDetails.imageUrl;
      }
      // if (this.eventDetails.eventCategoryName) {
      //   // this.eventCategory = this.eventDetails.categoryData;
      //   // this.eventCategory = this.eventDetails.eventCategoryName;
      // }
      if (this.eventDetails.endDate) {
        this.eventDetails.endDate = new Date(this.eventDetails.endDate);
        this.eventForm.get('endDate').patchValue(this.eventDetails.endDate);
        //  = this.eventDetails.endDate;
      }
      if (this.eventDetails.startDate) {
        this.eventDetails.startDate = new Date(this.eventDetails.startDate);
        this.eventForm.get('startDate').patchValue(this.eventDetails.startDate);
        //  = this.eventDetails.endDate;
      }
    }
  }
  createForm() {
    this.eventForm = this.$fb.group({
      eventCategoryId: [null, Validators.required],
      title: ['', [Validators.maxLength(this.eventNameMaxlength), Validators.required]],
      // privacy: ['', [Validators.required]],
      price: [null, [Validators.maxLength(this.priceMaxLength), Validators.pattern(PATTERN.price), Validators.required]],
      eventUrl: ['', [Validators.pattern(PATTERN.url)]],
      description: ['', [Validators.required, Validators.maxLength(this.descriptionMaxLength)]],
      location: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      address: ['', Validators.required],
      isFeatured: [0],
      allowSharing: [0]
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
  get minForStartDate() {
    return this.eventDetails && this.eventDetails.id ?
      this.eventDetails.endDate : new Date(new Date(this.startDate.value).getTime() + 1800000);
  }



  keypressTest(event, prelength, id: string) {
    if (event.target.value.split('.').length > 1) {
      const splitArray = event.target.value.split('.');
      document.getElementById(id).setAttribute('maxlength', splitArray[0].length + 3);
    } else {
      document.getElementById(id).setAttribute('maxlength', prelength);
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
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    if (!this.eventDetails && this.form('startDate').value && Date.now() > new Date(this.form('startDate').value).getTime()) {
      this.$utility.errorAlert('Start time must be greater than current time');
      // this.form('startDate').reset(null);
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
    if (!body.eventUrl) {
      delete body.eventUrl;
    }

    if (this.location && this.address) {
      body.location = this.location;
      body.address = this.address;
    }
    if (this.address) {
      body.location = this.location;
      body.address = this.address;
    }
    if (body.endDate) {
      body.endDate = new Date(body.endDate).getTime();
    }
    if (body.startDate) {
      body.startDate = new Date(body.startDate).getTime();
    } else if (this.startDate.disabled) {
      body.startDate = new Date(this.eventDetails.startDate).getTime();
    }

    body.isFeatured = body.isFeatured ? 1 : 0;
    body.allowSharing = body.allowSharing ? 1 : 0;
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

  /**
   * API hit for Category
   */

  categoryList() {
    const params = {
      page: 1,
      limit: 100,
      type: CATEGORY_TYPE.EVENT_CAEGORY
    };
    this.$category.queryData(params).then(res => {
      this.eventCategory = res.data['data'].filter(element => element.status != 'blocked');
      if (this.eventDetails && this.eventDetails._id) {
        const category = this.eventCategory.find(category => category.title == this.eventDetails.eventCategoryName);
        this.eventForm.get('eventCategoryId').patchValue(category._id);
        console.log(category);
      }
    });
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

  onDateSelected(event) {
    if (event && this.startDate.value && new Date(event.value) < new Date(new Date(this.startDate.value).getTime() + 3600000)) {
      this.endDate.setValue(new Date(new Date(this.startDate.value).getTime() + 1800000));
    }
  }

  onStartDateSelected(event) {
    console.log(new Date(this.startDate.value).getTime() + 1800000, new Date(this.endDate.value).getTime());

    // this.maxDate = new Date(new Date(event.value).getTime() + 2592000000);
    if (event && this.endDate.value) {
      const startDate = new Date(event.value).setSeconds(0);
      const endDate = new Date(this.endDate.value).setSeconds(0);
      if (endDate - startDate !== 1800000) {
        // console.log('paap h');
        this.endDate.setValue(null);
       }


      console.log(new Date(startDate));

    }
    // if (event && this.endDate.value && (new Date(event.value).getTime() > new Date(this.endDate.value).getTime() 
    // || new Date(this.startDate.value).getTime() + 1800000 > new Date(this.endDate.value).getTime() )) {
    //   this.endDate.setValue(null);
    // }
  }
}


