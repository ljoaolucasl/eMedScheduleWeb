import { ActivityTypeEnum } from './activity-type-enum';

export class FormsActivityViewModel {
  constructor(
    public title: string,
    public selectedDoctors: string[],
    public activityType: ActivityTypeEnum,
    public date: Date,
    public startTime: string,
    public endTime: string
  ) {
    this.title = title;
    this.selectedDoctors = selectedDoctors;
    this.activityType = activityType;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
