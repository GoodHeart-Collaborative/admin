import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { EXPERT_DETAILS } from 'src/app/constant/routes';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ExpertService } from '../../../service/expert.service';

@Component({
  selector: 'app-add-expert-content',
  templateUrl: './add-expert-content.component.html',
  styleUrls: ['./add-expert-content.component.scss']
})
export class AddExpertContentComponent implements OnInit {
  expertContentForm: FormGroup;
  categoryData: any;
  expertContentId: string;
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
      price: [],
      contentId: [],
      mediaType: [],
      description: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.descriptionMaxLength)]],
      privacy: []
    });
  }

  form(name) {
    return this.expertContentForm.controls[name];
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
    // if (this.imageFile) {
    //   let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
    //   this.profilePicURL = data.Location;
    // }
    let body = {...this.expertContentForm.value };
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
