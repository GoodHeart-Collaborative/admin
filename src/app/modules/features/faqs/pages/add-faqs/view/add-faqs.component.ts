import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';

@Component({
  selector: 'app-add-faqs',
  templateUrl: './add-faqs.component.html',
  styleUrls: ['./add-faqs.component.scss']
})
export class AddFaqsComponent implements OnInit {
  faqForm: FormGroup;
  questionFaqMaxLimit = VALIDATION_CRITERIA.questionFaqMaxLimit;
  answerFaqMaxLimit = VALIDATION_CRITERIA.answerFaqMaxLimit;
  constructor(private $fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.faqForm = this.$fb.group({
      question: ['' , [Validators.required, Validators.maxLength(this.questionFaqMaxLimit)]],
      answer: ['', [Validators.required, Validators.maxLength(this.answerFaqMaxLimit)]]
    });
  }
}
