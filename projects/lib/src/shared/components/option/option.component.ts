import { Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'option[r-option]',
  template: ` <ng-content /> `,
})
export class Option {
  /**
   * Reference to the host element.
   */
  el = inject(ElementRef);
}
