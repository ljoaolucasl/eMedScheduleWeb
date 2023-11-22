import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './views/dashboard/dashboard.module';
import './extensions/form-group.extension';
import { AuthService } from './core/auth/services/auth.service';
import { httpTokenInterceptor } from './core/auth/interceptors/http-token.interceptor';
import { RegisterModule } from './views/register/register.module';
import { LoginModule } from './views/login/login.module';

function loadSavedUser(authService: AuthService) {
  return () => authService.savedUserLogin();
}

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,

    SharedModule,
    CoreModule,
    LoginModule,
    RegisterModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadSavedUser,
      deps: [AuthService],
      multi: true,
    },
    provideHttpClient(withInterceptors([httpTokenInterceptor])),
  ],
})
export class AppModule {}
