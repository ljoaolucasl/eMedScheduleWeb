import { Component } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { FormsActivityViewModel } from '../models/forms-activity.view.model';
import { ListActivityViewModel } from '../models/list-activity.view.model';
import { CompleteActivityViewModel } from '../models/complete-activity.view.model';
import { BreakpointObserverService } from 'src/app/core/mobile-responsive/services/breakpoint-observer.service';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { ListData } from 'src/app/shared/list-data/list-data';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.scss'],
})
export class ListActivityComponent extends ListData<
  ActivityService,
  FormsActivityViewModel,
  ListActivityViewModel,
  CompleteActivityViewModel
> {
  constructor(
    public breakpointService: BreakpointObserverService,
    protected activityService: ActivityService,
    protected override notificationService: NotificationService
  ) {
    super(activityService, notificationService);
  }
}
