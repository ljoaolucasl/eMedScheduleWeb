import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { MobileResponsiveModule } from './mobile-responsive/mobile-responsive.module';
import { NotificationModule } from './notification/notification.module';
import { ShellModule } from './shell/shell.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    AuthModule,
    ThemeModule,
    ShellModule,
    NotificationModule,
    MobileResponsiveModule,
  ],
})
export class CoreModule {}
