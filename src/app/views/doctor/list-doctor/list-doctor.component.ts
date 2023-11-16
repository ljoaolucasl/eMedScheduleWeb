import { Component } from '@angular/core';
import { ListData } from 'src/app/shared/list-data/list-data';
import { FormsDoctorViewModel } from '../models/forms-doctor.view.model';
import { ListDoctorViewModel } from '../models/list-doctor.view.model';
import { CompleteDoctorViewModel } from '../models/complete-doctor.view.model';
import { DoctorService } from '../services/doctor.service';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { BreakpointObserverService } from 'src/app/core/mobile-responsive/services/breakpoint-observer.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss'],
})
export class ListDoctorComponent extends ListData<
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
    console.log(this.data);
  }
}
