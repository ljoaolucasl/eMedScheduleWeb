import { ListActivityViewModel } from '../../activity/models/list-activity.view.model';

export class CompleteDoctorViewModel {
  constructor(
    public id: string,
    public name: string,
    public crm: string,
    public profilePictureBase64: string,
    public activities: ListActivityViewModel[]
  ) {
    this.id = id;
    this.name = name;
    this.crm = crm;
    this.profilePictureBase64 = profilePictureBase64;
    this.activities = activities;
  }
}
