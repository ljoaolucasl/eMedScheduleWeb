import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { CompleteDoctorViewModel } from '../models/complete-doctor.view.model';
import { FormsDoctorViewModel } from '../models/forms-doctor.view.model';
import { ListDoctorViewModel } from '../models/list-doctor.view.model';
import { ListWorkedHoursDoctorViewModel } from '../models/list-worked-hours-doctor.view.model';
import { Observable, catchError, map } from 'rxjs';

@Injectable()
export class DoctorService extends DataService<
  FormsDoctorViewModel,
  ListDoctorViewModel,
  CompleteDoctorViewModel
> {
  override endpoint: string = 'doctor';

  getDoctorsWokedHours(
    dateStart: string,
    endTime: string
  ): Observable<ListWorkedHoursDoctorViewModel[]> {
    return this.http
      .get<any>(
        this.url + this.endpoint + `/worked-hours/${dateStart}=${endTime}`
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => this.processError(error))
      );
  }
}
