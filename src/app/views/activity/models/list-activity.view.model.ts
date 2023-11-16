import { ActivityTypeEnum } from './activity-type-enum';

export class ListActivityViewModel {
  constructor(
    public id: string,
    public title: string,
    public activityType: ActivityTypeEnum,
    public date: Date,
    public startTime: string,
    public endTime: string
  ) {
    this.id = id;
    this.title = title;
    this.activityType = activityType;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
