import { Injectable, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { IDataService } from '../models/data.interface.service';

@Injectable()
export abstract class ListData<
  TService extends IDataService<TForm, TList, TFull>,
  TForm,
  TList,
  TFull
> implements OnInit
{
  data: TList[] = [];
  isLoading: boolean = true;

  constructor(
    protected dadosService: TService,
    protected notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.dadosService.get().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => this.processError(error),
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  processError(error: Error) {
    this.notificationService.error(error.message);
  }
}
