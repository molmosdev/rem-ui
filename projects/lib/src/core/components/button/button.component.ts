import { Component, input } from '@angular/core';
import { Spinner } from '../spinner/spinner.component';

@Component({
  selector: 'button[r-button]',
  imports: [Spinner],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host: {
    '[class]': 'variant() + " size-" + size() + " radius-" + radius()',
    '[class.equal-padding]': 'equalPadding()',
    '[class.loading]': 'loading()',
  },
})
export class Button {
  /** The variant of the button. */
  readonly variant = input<'primary' | 'secondary' | 'ghost' | 'outlined'>(
    'primary'
  );

  /** The size of the button. */
  readonly size = input<'small' | 'default'>('default');

  /** The radius of the button. */
  readonly radius = input<'none' | 'medium' | 'full'>('medium');

  /** Whether is loading. */
  readonly loading = input(false);

  /** Whether the padding should be equal vertically and horizontally. */
  readonly equalPadding = input(false);
}
