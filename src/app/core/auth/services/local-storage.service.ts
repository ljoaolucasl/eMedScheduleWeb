import { Injectable } from '@angular/core';
import { TokenViewModel } from '../models/token.view-model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey: string = 'e-med-storage';

  constructor() {}

  saveData(data: TokenViewModel) {
    const json = JSON.stringify(data);

    localStorage.setItem(this.storageKey, json);
  }

  loadingData(): TokenViewModel | undefined {
    const json = localStorage.getItem(this.storageKey);

    if (!json) return undefined;

    return JSON.parse(json) as TokenViewModel;
  }

  deleteData(): void {
    localStorage.setItem(this.storageKey, '');
  }
}
