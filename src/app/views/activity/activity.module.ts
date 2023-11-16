import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { CardActivityComponent } from './card-activity/card-activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';
import { DeleteActivityComponent } from './delete-activity/delete-activity.component';
import { ListActivityComponent } from './list-activity/list-activity.component';


@NgModule({
  declarations: [
    DetailActivityComponent,
    CardActivityComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    DeleteActivityComponent,
    ListActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
