import { FormGroup } from '@angular/forms';

declare module '@angular/forms' {
  interface FormGroup {
    validate(): string[];
  }
}

FormGroup.prototype.validate = function () {
  const errors: string[] = [];

  for (let field of Object.keys(this.controls)) {
    const control = this.get(field);

    if (!control?.errors) continue;

    control.markAsTouched();

    for (let error of Object.keys(control.errors)) {
      switch (error) {
        case 'required':
          errors.push(`The field '${field}' is mandatory`);
          break;
        case 'email':
          errors.push(`The field '${field}' must follow a valid format`);
          break;
      }
    }
  }
  return errors;
};
