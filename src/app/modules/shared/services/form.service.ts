import { Injectable } from '@angular/core';
import { Validators, AbstractControl, FormGroup } from '@angular/forms';
import { PATTERN } from '../../../constant/patterns';
import { VALIDATION_CRITERIA } from '../../../constant/validation-criteria';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() { }
  VALIDATION = {
    name: [
      Validators.pattern(PATTERN.name),
      Validators.required,
      Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength),
    ],
    price: [
      Validators.pattern(PATTERN.price),
      Validators.minLength(VALIDATION_CRITERIA.priceMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.priceMaxLength),
      Validators.min(0),
    ],
    email: [
      Validators.pattern(PATTERN.email),
      Validators.required,
      Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength),
    ],
    description: [
      Validators.pattern(PATTERN.name),
      Validators.minLength(VALIDATION_CRITERIA.locationMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.locationMaxLength),
    ],
    password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
    phone: [
      Validators.required,
      Validators.pattern(PATTERN.phone),
      Validators.minLength(VALIDATION_CRITERIA.phoneMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.phoneMaxLength),
    ],
    dropdown: [],
    checkbox: [],
    iconImage: [],
    regStartDate: [],
    regEndDate: [],
    minRange: [Validators.max(VALIDATION_CRITERIA.maxRange)],
    maxRange: [Validators.max(VALIDATION_CRITERIA.maxRange)],
    status: [],
    accountStatus: [],
    minBooking: [],
    maxBooking: [],
    companyType: [],
  };

  matchPassword(form: AbstractControl) {
    let password = form.get('password').value;
    let confirmPassword = form.get('confirmPassword').value;
    if (password !== confirmPassword) {
      form.get('confirmPassword').setErrors({ matchPassword: true });
    } else {
      if (password === confirmPassword) {
        if (form.get('confirmPassword').errors) {
          delete form.get('confirmPassword').errors['matchPassword'];
          let keys = Object.keys(form.get('confirmPassword').errors);
          if (keys.length === 0) {
            form.get('confirmPassword').setErrors(null);
          }
        }
      }
    }
  }

  minMaxRangeValidator(min: string, max: string) {
    return (fg: FormGroup) => {
      const minValue = Number(fg.controls[min].value) || 0;
      const maxValue = Number(fg.controls[max].value) || 0;
      if (!maxValue) {
        return fg.controls[max].setErrors(null);
      }
      if (maxValue < minValue) {
        return fg.controls[max].setErrors({ maxError: true });
      }
      return fg.controls[max].setErrors(null);
    };
  }

  getControl(name, required = true) {
    let compose = [...this.VALIDATION[name]];
    if (required) {
      if (name === 'checkbox') {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    return ['', compose];
  }

  getFilterFormControls(keys: string[]) {
    let form = {};
    for (let key of keys) {
      form[key] = [null];
    }
    return form;
  }
}
