import { Component, computed, contentChild } from '@angular/core';
import { Input } from '../../../core/components/input/input.component';
import { Select } from '../../../public-api';

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

  /**
   * The select element.
   */
  select = contentChild(Select);

  /**
   * Whether the select is active.
   */
  isSelectActive = computed(() => {
    const select = this.select();
    return !!select?.value();
  });
}
