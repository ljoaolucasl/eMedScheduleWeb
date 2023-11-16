export class ListDoctorViewModel {
  constructor(
    public id: string,
    public name: string,
    public profilePictureBase64: string
  ) {
    this.id = id;
    this.name = name;
    this.profilePictureBase64 = profilePictureBase64;
  }
}
