import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { ListActivityViewModel } from '../models/list-activity.view.model';
import { FormsActivityViewModel } from '../models/forms-activity.view.model';
import { CompleteActivityViewModel } from '../models/complete-activity.view.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreakpointObserverService } from 'src/app/core/mobile-responsive/services/breakpoint-observer.service';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { AddData } from 'src/app/shared/add-data/add-data';
import { DoctorService } from '../../doctor/services/doctor.service';
import { ListDoctorViewModel } from '../../doctor/models/list-doctor.view.model';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss'],
})
export class AddActivityComponent
  extends AddData<
    ActivityService,
    FormsActivityViewModel,
    ListActivityViewModel,
    CompleteActivityViewModel
  >
  implements OnInit
{
  doctors: ListDoctorViewModel[] = [];

  constructor(
    protected breakpointService: BreakpointObserverService,
    protected fb: FormBuilder,
    protected activityService: ActivityService,
    protected router: Router,
    protected override notificationService: NotificationService,
    protected doctorService: DoctorService
  ) {
    super(activityService, notificationService);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
      activityType: new FormControl(0, [Validators.required]),
      selectedDoctors: new FormControl([], [Validators.required]),
    });

    this.doctorService.get().subscribe((doctors) => (this.doctors = doctors));
  }

  override processSuccess(activity: ListActivityViewModel) {
    this.notificationService.success(
      `Activity ${activity.title} has been successfully registered!`
    );
    this.router.navigate(['/activity/list']);
  }

  getErrorMessage(name: string) {
    if (this.form.get(name)!.hasError('required')) {
      return 'You must enter a value';
    }

    if (name == 'name') {
      if (this.form.get(name)!.hasError('invalidName')) {
        return 'Minimum 3 characters';
      }
    }

    if (name == 'crm') {
      return this.form.get(name)!.hasError('invalidCrm')
        ? 'CRM in invalid format'
        : '';
    }

    return '';
  }
}
