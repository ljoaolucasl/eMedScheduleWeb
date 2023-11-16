import { ListDoctorViewModel } from '../../doctor/models/list-doctor.view.model';
import { ActivityTypeEnum } from './activity-type-enum';

export class CompleteActivityViewModel {
  constructor(
    public id: string,
    public title: string,
    public doctors: ListDoctorViewModel[],
    public activityType: ActivityTypeEnum,
    public date: Date,
    public startTime: string,
    public endTime: string
  ) {
    this.id = id;
    this.title = title;
    this.doctors = doctors;
    this.activityType = activityType;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
