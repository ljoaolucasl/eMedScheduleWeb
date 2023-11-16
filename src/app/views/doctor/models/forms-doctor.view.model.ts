export class FormsDoctorViewModel {
  constructor(
    public name: string,
    public crm: string,
    public profilePictureBase64: string
  ) {
    this.name = name;
    this.crm = crm;
    this.profilePictureBase64 = profilePictureBase64;
  }
}
