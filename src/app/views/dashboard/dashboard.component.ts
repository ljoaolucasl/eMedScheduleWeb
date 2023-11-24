import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTokenViewModel } from 'src/app/core/auth/models/user-token.view-model';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { BreakpointObserverService } from 'src/app/core/mobile-responsive/services/breakpoint-observer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$?: Observable<UserTokenViewModel | undefined>;

  constructor(
    private authService: AuthService,
    public breakpointService: BreakpointObserverService
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.getAuthenticatedUser();
  }
}
