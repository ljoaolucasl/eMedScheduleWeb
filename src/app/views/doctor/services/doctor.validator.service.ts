import { AbstractControl, ValidationErrors } from '@angular/forms';

export class DoctorValidator {
  static crmValidator(control: AbstractControl): ValidationErrors | null {
    const crmValue = control.value;

    const crmRegex = /^\d{5}-[A-Za-z]{2}$/;

    const crmRegex2 = /^\d{5}[A-Za-z]{2}$/;

    const isValid = crmRegex.test(crmValue) || crmRegex2.test(crmValue);

    console.log(crmValue);

    return isValid ? null : { invalidCrm: true };
  }

  static nameValidator(control: AbstractControl): ValidationErrors | null {
    const nameValue = control.value;

    const isValid = nameValue.length >= 3;

    return isValid ? null : { invalidName: true };
  }
}
