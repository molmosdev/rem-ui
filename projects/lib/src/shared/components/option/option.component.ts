import { Component, ElementRef, inject, input } from '@angular/core';

@Component({
  selector: 'option[r-option]',
  template: ` <ng-content /> `,
})
export class Option {
  /**
   * Reference to the host element.
   */
  el = inject(ElementRef);

  /**
   * The value of the option.
   */
  value = input<string | null>(null);
}
