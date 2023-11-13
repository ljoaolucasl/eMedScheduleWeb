import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../../auth/services/local-storage.service';

@Injectable()
export class ThemeService {
  private chosenTheme: BehaviorSubject<boolean>;

  constructor(private localStorage: LocalStorageService) {
    this.chosenTheme = new BehaviorSubject<boolean>(true);
  }

  public getTheme() {
    return this.chosenTheme.asObservable();
  }

  public toggleTheme(theme: boolean) {
    this.chosenTheme.next(theme);
  }
}
