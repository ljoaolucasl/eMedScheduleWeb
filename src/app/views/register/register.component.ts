import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterViewModel } from 'src/app/core/auth/models/register.view-model';
import { TokenViewModel } from 'src/app/core/auth/models/token.view-model';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { NotificationService } from 'src/app/core/notification/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  register() {
    if (this.form.invalid) {
      for (let error of this.form.validate()) {
        this.notificationService.warning(error);
      }

      return;
    }

    const data: RegisterViewModel = this.form.value;

    this.authService.register(data).subscribe({
      next: (data: TokenViewModel) => this.processSuccess(data),
      error: (error: Error) => this.processError(error),
    });
  }

  getErrorMessage() {
    if (this.form.get('email')!.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get('email')!.hasError('email') ? 'Not a valid email' : '';
  }

  invalidField(name: string): boolean {
    return this.form.get(name)!.touched && this.form.get(name)!.invalid;
  }

  processSuccess(data: TokenViewModel) {
    this.notificationService.success(
      `Welcome, ${data.user.name}! Account created successfully!`
    );
    this.router.navigate(['/dashboard']);
  }

  processError(error: Error) {
    this.notificationService.error(error.message);
  }
}
