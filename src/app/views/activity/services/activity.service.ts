import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { CompleteActivityViewModel } from '../models/complete-activity.view.model';
import { FormsActivityViewModel } from '../models/forms-activity.view.model';
import { ListActivityViewModel } from '../models/list-activity.view.model';

@Injectable({
  providedIn: 'root',
})
export class ActivityService extends DataService<
  FormsActivityViewModel,
  ListActivityViewModel,
  CompleteActivityViewModel
> {
  override endpoint: string = 'doctorActivity';
}
