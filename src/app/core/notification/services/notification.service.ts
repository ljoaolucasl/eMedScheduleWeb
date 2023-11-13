import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotificationComponent } from '../notification.component';

@Injectable()
export class NotificationService {
  constructor(private snackbar: MatSnackBar) {}

  success(message: string): void {
    this.snackbar.openFromComponent(NotificationComponent, {
      data: { message: message, type: 'success' },
    });
  }

  warning(message: string): void {
    this.snackbar.openFromComponent(NotificationComponent, {
      data: { message: message, type: 'warning' },
    });
  }

  error(message: string): void {
    this.snackbar.openFromComponent(NotificationComponent, {
      data: { message: message, type: 'error' },
    });
  }
}
