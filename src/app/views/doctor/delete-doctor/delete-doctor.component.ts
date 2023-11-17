import { Component } from '@angular/core';
import { DeleteData } from 'src/app/shared/delete-data/delete-data';
import { FormsDoctorViewModel } from '../models/forms-doctor.view.model';
import { ListDoctorViewModel } from '../models/list-doctor.view.model';
import { CompleteDoctorViewModel } from '../models/complete-doctor.view.model';
import { DoctorService } from '../services/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { NotificationService } from 'src/app/core/notification/services/notification.service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.scss'],
})
export class DeleteDoctorComponent extends DeleteData<
  DoctorService,
  FormsDoctorViewModel,
  ListDoctorViewModel,
  CompleteDoctorViewModel
> {
  constructor(
    protected doctorService: DoctorService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected override notificationService: NotificationService
  ) {
    super(doctorService, notificationService);
  }

  ngOnInit(): void {
    this.idSelected = this.route.snapshot.paramMap.get('id');

    this.route.data.pipe(map((data) => data['doctor'])).subscribe((data) => {
      this.data = data;
    });
  }

  override processSuccess(data: ListDoctorViewModel): void {
    this.notificationService.success(
      `Doctor '${data.name}' has been successfully deleted!`
    );
    this.router.navigate(['/doctor/list']);
  }

  override cancelDeletion(): void {
    this.router.navigate(['/doctor/list']);
  }
}
