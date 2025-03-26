import { Component, computed, contentChild } from '@angular/core';
import { Input } from '../../../core/components/input/input.component';
import { Select } from '../../../public-api';

@Component({
  selector: 'r-label',
  imports: [],
  template: ' <ng-content /> ',
  styleUrl: './label.component.css',
  host: {
    '[class.up]': 'labelUp()',
    '[style.max-width]': 'maxWidth()',
  },
})
export class Label {
  /**
   * The input element.
   */
  readonly input = contentChild(Input);

  /**
   * The select element.
   */
  readonly select = contentChild(Select);

  /**
   * Whether the label should be up.
   */
  readonly labelUp = computed(() => {
    const input = this.input();
    const select = this.select();

    return (
      input?.focused() ||
      input?.value() ||
      input?.placeholder() ||
      select?.value()
    );
  });

  /**
   * The label width.
   */
  readonly maxWidth = computed(() => {
    const input = this.input();
    return input?.maxWidth() || this.select()?.maxWidth();
  });
}
