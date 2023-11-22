import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'doctor',
    loadChildren: () =>
      import('./views/doctor/doctor.module').then((d) => d.DoctorModule),
    canActivate: [authGuard],
  },
  {
    path: 'activity',
    loadChildren: () =>
      import('./views/activity/activity.module').then((d) => d.ActivityModule),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
