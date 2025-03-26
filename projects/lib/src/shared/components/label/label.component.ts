import { Component, computed, contentChild } from '@angular/core';
import { Select, Input, Switch } from '../../../public-api';

@Component({
  selector: 'r-label',
  imports: [],
  template: `<ng-content />`,
  styleUrl: './label.component.css',
  host: {
    '[class.up]': 'labelUp()',
    '[style.max-width]': 'maxWidth()',
    '[class.is-switch]': 'switch()',
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
   * The switch element.
   */
  readonly switch = contentChild(Switch);

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
