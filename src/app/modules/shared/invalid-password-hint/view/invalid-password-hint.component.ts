import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
export type passwrodTypes = {
  ['uppercase']: RegExp,
  ['lowercase']: RegExp,
  ['special']: RegExp,
  ['numeric']: RegExp,
  ['length']: RegExp,
}

@Component({
  selector: 'app-invalid-password-hint',
  templateUrl: './invalid-password-hint.component.html',
  styleUrls: ['./invalid-password-hint.component.scss']
})
export class InvalidPasswordHintComponent implements OnInit {
  @Input() control: FormControl;
  pattersForPassword: passwrodTypes = {
    ['uppercase']: new RegExp('(?=.*[A-Z])'),
    ['lowercase']: new RegExp('(?=.*[a-z])'),
    ['special']: new RegExp('(?=.*[!@#$%&*()_+=|<>?{}\\[\\]~-])'),
    ['numeric']: new RegExp('(?=.*[0-9])'),
    ['length']: new RegExp('(?=.{8,})'),
  }
  constructor() { }

  ngOnInit() {
  }

  checkValue(type: keyof passwrodTypes, controlName: string) {
    return this.pattersForPassword[type].test(this.control.value);
    }
}
