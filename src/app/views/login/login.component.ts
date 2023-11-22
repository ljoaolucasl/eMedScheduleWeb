import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginViewModel } from 'src/app/core/auth/models/login.view-model';
import { TokenViewModel } from 'src/app/core/auth/models/token.view-model';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { NotificationService } from 'src/app/core/notification/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  login() {
    if (this.form.invalid) {
      for (let error of this.form.validate()) {
        this.notificationService.warning(error);
      }

      return;
    }

    const data: LoginViewModel = this.form.value;

    this.authService.login(data).subscribe({
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

  processSuccess(dados: TokenViewModel) {
    this.notificationService.success(`Welcome, ${dados.user.name}!`);
    this.router.navigate(['/dashboard']);
  }

  processError(erro: Error) {
    this.notificationService.error(erro.message);
  }
}
