import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { CardActivityComponent } from './card-activity/card-activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';
import { DeleteActivityComponent } from './delete-activity/delete-activity.component';
import { ListActivityComponent } from './list-activity/list-activity.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityService } from './services/activity.service';
import { DoctorModule } from '../doctor/doctor.module';

@NgModule({
  declarations: [
    DetailActivityComponent,
    CardActivityComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    DeleteActivityComponent,
    ListActivityComponent,
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    DoctorModule,
    CoreModule,
    SharedModule,
  ],
  providers: [ActivityService],
})
export class ActivityModule {}
