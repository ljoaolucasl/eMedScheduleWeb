import { UserTokenViewModel } from './user-token.view-model';

export class TokenViewModel {
  constructor(
    public token: string,
    public user: UserTokenViewModel,
    public expirationDate: Date
  ) {
    this.token = token;
    this.user = user;
    this.expirationDate = expirationDate;
  }
}
