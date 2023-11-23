import { NgModule, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterModule,
  Routes,
} from '@angular/router';
import { FormsDoctorViewModel } from './models/forms-doctor.view.model';
import { CompleteDoctorViewModel } from './models/complete-doctor.view.model';
import { DoctorService } from './services/doctor.service';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { DetailDoctorComponent } from './detail-doctor/detail-doctor.component';
import { ListWorkedDoctorComponent } from './list-worked-doctor/list-worked-doctor.component';

const formsDoctorResolver: ResolveFn<FormsDoctorViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(DoctorService).getById(route.paramMap.get('id')!);
};

const formsDoctorResolverFull: ResolveFn<CompleteDoctorViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(DoctorService).getCompleteById(route.paramMap.get('id')!);
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListDoctorComponent,
  },
  {
    path: 'list_worked',
    component: ListWorkedDoctorComponent,
  },
  {
    path: 'add',
    component: AddDoctorComponent,
  },
  {
    path: 'edit/:id',
    component: UpdateDoctorComponent,
    resolve: {
      doctor: formsDoctorResolver,
    },
  },
  {
    path: 'delete/:id',
    component: DeleteDoctorComponent,
    resolve: {
      doctor: formsDoctorResolver,
    },
  },
  {
    path: 'details/:id',
    component: DetailDoctorComponent,
    resolve: {
      doctor: formsDoctorResolverFull,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
