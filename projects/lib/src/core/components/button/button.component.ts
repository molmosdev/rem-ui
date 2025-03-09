import { Component, input } from '@angular/core';
import { Spinner } from '../spinner/spinner.component';

@Component({
  selector: 'button[r-button]',
  imports: [Spinner],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host: {
    '[class]': 'variant() + " size-" + size() + " radius-" + radius()',
    '[style.padding-inline]': 'noPaddingInline() ? "0" : ""',
  },
})
export class Button {
  /** The variant of the button. */
  variant = input<'primary' | 'secondary' | 'ghost'>('primary');

  /** The size of the button. */
  size = input<'small' | 'default'>('default');

  /** The radius of the button. */
  radius = input<'none' | 'medium' | 'full'>('medium');

  /** Whether is loading. */
  loading = input(false);

  /** Whether it has no padding. */
  noPaddingInline = input(false);
}
