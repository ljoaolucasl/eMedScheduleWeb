import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/theme/services/theme.service';
import { AuthService } from './core/auth/services/auth.service';
import { UserTokenViewModel } from './core/auth/models/user-token.view-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'eMedScheduleWeb';

  chosenTheme!: boolean;

  constructor(private themeService: ThemeService) {
    this.chosenTheme = false;
  }

  ngOnInit(): void {
    this.themeService
      .getTheme()
      .subscribe((theme) => (this.chosenTheme = theme));
  }
}
