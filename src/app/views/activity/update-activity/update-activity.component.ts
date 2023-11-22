import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserverService } from 'src/app/core/mobile-responsive/services/breakpoint-observer.service';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { EditData } from 'src/app/shared/edit-data/edit-data';
import { ListDoctorViewModel } from '../../doctor/models/list-doctor.view.model';
import { DoctorService } from '../../doctor/services/doctor.service';
import { CompleteActivityViewModel } from '../models/complete-activity.view.model';
import { FormsActivityViewModel } from '../models/forms-activity.view.model';
import { ListActivityViewModel } from '../models/list-activity.view.model';
import { ActivityService } from '../services/activity.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.scss'],
})
export class UpdateActivityComponent
  extends EditData<
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
    protected doctorService: DoctorService,
    protected route: ActivatedRoute
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

    this.idSelected = this.route.snapshot.paramMap.get('id');

    this.route.data.pipe(map((data) => data['activity'])).subscribe((data) => {
      this.form.patchValue(data);
    });
  }

  override processSuccess(activity: ListActivityViewModel) {
    this.notificationService.success(
      `Activity ${activity.title} was edited successfully!`
    );
    this.router.navigate(['/activity/list']);
  }
}
