import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ActivityValidator {
  static titleValidator(control: AbstractControl): ValidationErrors | null {
    const nameValue = control.value;

    const isValid = nameValue.length >= 3;

    return isValid ? null : { invalidName: true };
  }
}
