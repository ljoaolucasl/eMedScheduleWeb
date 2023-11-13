import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs';

@Injectable()
export class BreakpointObserverService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  get isHandset$() {
    return this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );
  }
}
