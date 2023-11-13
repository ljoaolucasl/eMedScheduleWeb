import { UserTokenViewModel } from './user-token.view-model';

export class TokenViewModel {
  constructor(
    public key: string,
    public userToken: UserTokenViewModel,
    public expirationDate: Date
  ) {
    this.key = key;
    this.userToken = userToken;
    this.expirationDate = expirationDate;
  }
}
