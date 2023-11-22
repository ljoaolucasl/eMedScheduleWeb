import { Component } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { DeleteData } from 'src/app/shared/delete-data/delete-data';
import { CompleteActivityViewModel } from '../models/complete-activity.view.model';
import { FormsActivityViewModel } from '../models/forms-activity.view.model';
import { ListActivityViewModel } from '../models/list-activity.view.model';

@Component({
  selector: 'app-delete-activity',
  templateUrl: './delete-activity.component.html',
  styleUrls: ['./delete-activity.component.scss'],
})
export class DeleteActivityComponent extends DeleteData<
  ActivityService,
  FormsActivityViewModel,
  ListActivityViewModel,
  CompleteActivityViewModel
> {
  constructor(
    protected activityService: ActivityService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected override notificationService: NotificationService
  ) {
    super(activityService, notificationService);
  }

  ngOnInit(): void {
    this.idSelected = this.route.snapshot.paramMap.get('id');

    this.route.data.pipe(map((data) => data['activity'])).subscribe((data) => {
      this.data = data;
    });
  }

  override processSuccess(data: ListActivityViewModel): void {
    this.notificationService.success(
      `Activity '${data.title}' has been successfully deleted!`
    );
    this.router.navigate(['/activity/list']);
  }

  override cancelDeletion(): void {
    this.router.navigate(['/activity/list']);
  }
}
