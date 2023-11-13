export class RegisterViewModel {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public confirmPassword: string
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
