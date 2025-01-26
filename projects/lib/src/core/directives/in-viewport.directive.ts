import { Directive, ElementRef, inject, input, OnDestroy } from '@angular/core';
import { afterNextRender } from '@angular/core'; // Importante
import { InViewportService } from '../services/in-viewport.service';

@Directive({
  selector: '[r-in-viewport]',
})
export class InViewportDirective implements OnDestroy {
  inViewportId = input.required<string>();
  inViewportInitialVisibility = input<boolean>(false);
  el = inject(ElementRef);
  inViewportService = inject(InViewportService);

  constructor() {
    afterNextRender({
      write: () => {
        this.inViewportService.registerElement(
          this.inViewportId(),
          this.el.nativeElement,
          this.inViewportInitialVisibility()
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.inViewportService.unregisterElement(this.inViewportId());
  }
}
