import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHover]',
})
export class CardHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');

    this.renderer.addClass(
      this.element.nativeElement,
      'mat-mdc-elevation-specific'
    );

    this.renderer.addClass(this.element.nativeElement, 'mat-elevation-z8');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(
      this.element.nativeElement,
      'mat-mdc-elevation-specific'
    );

    this.renderer.removeClass(this.element.nativeElement, 'mat-elevation-z8');
  }
}
