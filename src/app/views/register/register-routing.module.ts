import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from 'src/app/core/auth/guards/login.guard';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: 'registro',
    component: RegisterComponent,
    canActivate: [loginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
