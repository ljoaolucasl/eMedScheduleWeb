import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { CompleteDoctorViewModel } from '../models/complete-doctor.view.model';
import { FormsDoctorViewModel } from '../models/forms-doctor.view.model';
import { ListDoctorViewModel } from '../models/list-doctor.view.model';

@Injectable()
export class DoctorService extends DataService<
  FormsDoctorViewModel,
  ListDoctorViewModel,
  CompleteDoctorViewModel
> {
  override endpoint: string = 'doctor';
}
