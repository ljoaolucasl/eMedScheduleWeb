import { NgModule, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterModule,
  Routes,
} from '@angular/router';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { DeleteActivityComponent } from './delete-activity/delete-activity.component';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { ListActivityComponent } from './list-activity/list-activity.component';
import { CompleteActivityViewModel } from './models/complete-activity.view.model';
import { FormsActivityViewModel } from './models/forms-activity.view.model';
import { ActivityService } from './services/activity.service';
import { UpdateActivityComponent } from './update-activity/update-activity.component';

const formsActivityResolver: ResolveFn<FormsActivityViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(ActivityService).getById(route.paramMap.get('id')!);
};

const formsActivityResolverFull: ResolveFn<CompleteActivityViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(ActivityService).getCompleteById(route.paramMap.get('id')!);
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListActivityComponent,
  },
  {
    path: 'add',
    component: AddActivityComponent,
  },
  {
    path: 'edit/:id',
    component: UpdateActivityComponent,
    resolve: {
      activity: formsActivityResolver,
    },
  },
  {
    path: 'delete/:id',
    component: DeleteActivityComponent,
    resolve: {
      activity: formsActivityResolver,
    },
  },
  {
    path: 'details/:id',
    component: DetailActivityComponent,
    resolve: {
      activity: formsActivityResolverFull,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
