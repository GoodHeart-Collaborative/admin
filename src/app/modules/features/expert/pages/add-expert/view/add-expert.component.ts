import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-expert',
  templateUrl: './add-expert.component.html',
  styleUrls: ['./add-expert.component.scss']
})
export class AddExpertComponent implements OnInit {
  expertForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
