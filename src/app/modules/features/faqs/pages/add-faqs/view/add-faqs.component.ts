import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { ContentService } from 'src/app/modules/shared/services/content.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-faqs',
  templateUrl: './add-faqs.component.html',
  styleUrls: ['./add-faqs.component.scss']
})
export class AddFaqsComponent implements OnInit {
  faqForm: FormGroup;
  questionFaqMaxLimit = VALIDATION_CRITERIA.questionFaqMaxLimit;
  answerFaqMaxLimit = VALIDATION_CRITERIA.answerFaqMaxLimit;
  details: any;
  constructor(
    private $fb: FormBuilder,
    private $service: ContentService,
    private $utility: UtilityService,
    private $dialogRef: MatDialogRef<AddFaqsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = {}) {
    this.createForm();
    if (data) {
      this.faqsDetails();
    }
  }

  ngOnInit() { }

  createForm() {
    this.faqForm = this.$fb.group({
      question: ['', [Validators.required, Validators.maxLength(this.questionFaqMaxLimit)]],
      answer: ['', [Validators.required, Validators.maxLength(this.answerFaqMaxLimit)]]
    });
  }


  form(name) {
    return this.faqForm.controls[name];
  }

  onSaveHandler() {
    if (this.faqForm.invalid) {
      this.faqForm.markAllAsTouched();
      return;
    }
    let body = { ...this.faqForm.value };
    if (this.details && this.details._id) {
      this.$service.onEditFaqHnadler(this.details._id, body).then(
        data => {
          this.faqForm.disable();
          this.$utility.success(data.message);
          this.$dialogRef.close(true);
        },
        err => {
          this.faqForm.enable();
        }
      );
      return;
    }
    this.$service.onAddFaqHnadler(body).then(
      data => {
        this.faqForm.disable();
        this.$utility.success(data.message);
        this.$dialogRef.close(true);
      },
      err => {
        this.faqForm.enable();
      });
  }

  faqsDetails() {
    this.$service.onFaqDetailsHandler(this.data).then(res => {
      if (res) {
        this.details = res.data;
        this.faqForm.patchValue(this.details);
      }
    });
  }
}
