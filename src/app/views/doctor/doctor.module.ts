import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { CardDoctorComponent } from './card-doctor/card-doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { DetailDoctorComponent } from './detail-doctor/detail-doctor.component';
import { DoctorService } from './services/doctor.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CoreModule } from 'src/app/core/core.module';
import { ListWorkedDoctorComponent } from './list-worked-doctor/list-worked-doctor.component';

@NgModule({
  declarations: [
    CardDoctorComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    DeleteDoctorComponent,
    ListDoctorComponent,
    ListWorkedDoctorComponent,
    DetailDoctorComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    NgxMaskDirective,
    CoreModule,
    SharedModule,
  ],
  providers: [DoctorService, provideNgxMask()],
})
export class DoctorModule {}
