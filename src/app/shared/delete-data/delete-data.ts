import { Injectable, OnInit } from '@angular/core';
import { IDataService } from '../models/data.interface.service';
import { NotificationService } from 'src/app/core/notification/services/notification.service';

@Injectable()
export abstract class DeleteData<
  TService extends IDataService<TForm, TList, TFull>,
  TForm,
  TList,
  TFull
> implements OnInit
{
  data!: TFull;
  idSelected!: string | null;

  constructor(
    protected dataService: TService,
    protected notificationService: NotificationService
  ) {}

  public abstract ngOnInit(): void;

  protected confirmDeletion() {
    this.dataService.delete(this.idSelected!).subscribe({
      next: (data: TList) => this.processSuccess(data),
      error: (error: Error) => this.processError(error),
    });
  }

  protected abstract processSuccess(data: TList): void;

  protected processError(error: Error) {
    this.notificationService.error(error.message);
  }

  protected abstract cancelDeletion(): void;
}
