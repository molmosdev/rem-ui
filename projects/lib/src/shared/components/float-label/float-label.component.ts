import { Component, computed, contentChild } from '@angular/core';
import { Input } from '../../../core/components/input/input.component';

@Component({
  selector: 'r-float-label',
  imports: [],
  template: ` <ng-content /> `,
  styleUrl: './float-label.component.css',
  host: {
    '[class.up]': 'isInputActive()',
  },
})
export class FloatLabel {
  /**
   * The input element.
   */
  input = contentChild(Input);

  /**
   * Whether the input is active.
   */
  isInputActive = computed(() => {
    const input = this.input();
    return !!(input?.focused() || input?.value() || input?.placeholder());
  });
}
