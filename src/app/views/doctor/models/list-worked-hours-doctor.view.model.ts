export class ListWorkedHoursDoctorViewModel {
  constructor(
    public id: string,
    public name: string,
    public profilePictureBase64: string,
    public workedHours: string
  ) {
    this.id = id;
    this.name = name;
    this.profilePictureBase64 = profilePictureBase64;
    this.workedHours = workedHours;
  }
}
