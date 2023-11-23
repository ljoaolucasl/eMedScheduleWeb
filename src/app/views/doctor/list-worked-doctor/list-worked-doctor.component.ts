import { Component } from '@angular/core';
import { BreakpointObserverService } from 'src/app/core/mobile-responsive/services/breakpoint-observer.service';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { ListData } from 'src/app/shared/list-data/list-data';
import { CompleteDoctorViewModel } from '../models/complete-doctor.view.model';
import { FormsDoctorViewModel } from '../models/forms-doctor.view.model';
import { ListDoctorViewModel } from '../models/list-doctor.view.model';
import { DoctorService } from '../services/doctor.service';
import { ListWorkedHoursDoctorViewModel } from '../models/list-worked-hours-doctor.view.model';

@Component({
  selector: 'app-list-worked-doctor',
  templateUrl: './list-worked-doctor.component.html',
  styleUrls: ['./list-worked-doctor.component.scss'],
})
export class ListWorkedDoctorComponent extends ListData<
  DoctorService,
  FormsDoctorViewModel,
  ListDoctorViewModel,
  CompleteDoctorViewModel
> {
  constructor(
    public breakpointService: BreakpointObserverService,
    protected doctorService: DoctorService,
    protected override notificationService: NotificationService
  ) {
    super(doctorService, notificationService);
  }

  startDate!: Date;
  endDate!: Date;

  list: ListWorkedHoursDoctorViewModel[] = [];

  override ngOnInit(): void {
    this.isLoading = true;

    const today = new Date();

    this.startDate = today;
    this.endDate = today;

    this.doctorService
      .getDoctorsWokedHours(this.getStartOfDay(today), this.getEndOfDay(today))
      .subscribe({
        next: (data) => {
          this.list = data;
        },
        error: (error) => this.processError(error),
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  filterDoctors() {
    if (this.validateDate(this.startDate, this.endDate)) {
      this.isLoading = true;

      this.doctorService
        .getDoctorsWokedHours(
          this.getStartOfDay(this.startDate),
          this.getEndOfDay(this.endDate)
        )
        .subscribe({
          next: (data) => {
            this.list = data;
          },
          error: (error) => this.processError(error),
          complete: () => {
            this.isLoading = false;
          },
        });
    }
  }

  validateDate(startDate: Date, endDate: Date) {
    if (startDate && endDate) {
      if (startDate <= endDate) {
        return true;
      }
    }
    return false;
  }

  getStartOfDay(date: Date): string {
    return new Date(
      Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        0,
        0,
        0
      )
    ).toISOString();
  }

  getEndOfDay(date: Date): string {
    return new Date(
      Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        23,
        59,
        59
      )
    ).toISOString();
  }
}
