import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, LocalStorageService],
})
export class AuthModule {}
