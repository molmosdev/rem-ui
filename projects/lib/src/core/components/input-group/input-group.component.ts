import { Component, input } from '@angular/core';

@Component({
  selector: 'r-input-group',
  template: `<ng-content />`,
  styleUrl: './input-group.component.css',
  host: {
    '[class.bordered]': 'bordered()',
    '[style.max-width]': 'maxWidth()',
  },
})
export class InputGroup {
  /**
   * Whether the input group elements are separated by a border.
   */
  readonly bordered = input<boolean>(true);

  /**
   * The maximum width of the input.
   */
  readonly maxWidth = input<string>('');
}
