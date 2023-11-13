import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserverService } from './services/breakpoint-observer.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [BreakpointObserverService],
})
export class MobileResponsiveModule {}
