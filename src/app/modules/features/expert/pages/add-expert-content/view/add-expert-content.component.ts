import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { EXPERT_DETAILS } from 'src/app/constant/routes';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ExpertService } from '../../../service/expert.service';
import { EXPERT_CONTENT_TYPE } from 'src/app/constant/drawer';

@Component({
  selector: 'app-add-expert-content',
  templateUrl: './add-expert-content.component.html',
  styleUrls: ['./add-expert-content.component.scss']
})
export class AddExpertContentComponent implements OnInit {
  expertContentForm: FormGroup;
  categoryData: any;
  expertContentId: string;
  contentType = EXPERT_CONTENT_TYPE;
  imageFile: any;
  thumbnailUrl: string;
  profilePicURL: string;
  constructor(
    private $fb: FormBuilder,
    private $category: CategoryManagementService,
    $activatedRoute: ActivatedRoute,
    private $router: Router,
    private $service: ExpertService,
    private $utility: UtilityService,
  ) {
    this.expertContentId = $activatedRoute.snapshot.parent.params.id;
    this.createForm();
  }

  ngOnInit() {
    this.categoryList();
  }

  createForm() {
    this.expertContentForm = this.$fb.group({
      expertId: [this.expertContentId],
      categoryId: [],
      price: [0],
      contentId: [],
      mediaType: [],
      description: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.descriptionMaxLength)]],
      privacy: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.topicMaxLength)]],
      topic: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.topicMaxLength)]]
    });
  }

  form(name) {
    return this.expertContentForm.controls[name];
  }

  get contentId() {
    return this.expertContentForm.controls['contentId'] as FormControl;
  }

  setimageFile(event) {
    console.log(event);
    switch (event.type) {
      case 1:
        this.contentType = this.getUpdatedTypes([2,3]);
        break;
      case 2:
        this.contentType = this.getUpdatedTypes([1]);

        break;
      case 3:
        this.contentType = this.getUpdatedTypes([4]);

        break;

      default:
        break;
    }
    event.type === 1 ? this.thumbnailUrl = '' : this.profilePicURL = '';
    this.imageFile = event;
  }

  getUpdatedTypes(validTypes: number[]) {
    return EXPERT_CONTENT_TYPE.map(type => {
      if(validTypes.includes(type.value)){
        type.disabled = false;
      } else{
        type.disabled = true;

      }
      return type;
    })
  }
  /**
   * API hit for Category
   */
  categoryList() {
    const params = {
      page: 1,
      limit: 10,
    };
    this.$category.queryData(params).then(res => {
      this.categoryData = res.data['data'];
    });
  }

  async onSubmit() {
    if (this.expertContentForm.invalid) {
      return;
    }
    if (this.imageFile) {
      // let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      // this.profilePicURL = data.Location;
    }
    let body = { ...this.expertContentForm.value };
    console.log(body);
    // if (this.details && this.details._id) {
    //   delete body.type;
    //   this.$service.edit(this.details._id, body).then(
    //     data => {
    //       this.expertContentForm.enable();
    //       this.$utility.success(data.message);
    //       this.$route.navigate([EXPERT.fullUrl]);
    //     },
    //     err => {
    //       this.expertContentForm.enable();
    //     }
    //   );
    //   return;
    // }
    this.$service.add(body).then(
      data => {
        this.expertContentForm.enable();
        this.$utility.success(data.message);

        this.$router.navigate([EXPERT_DETAILS.fullUrl]);

      },
      err => {
        this.expertContentForm.enable();
      });
  }

  onCancel() {
    this.$router.navigate([EXPERT_DETAILS.fullUrl]);
  }
}
