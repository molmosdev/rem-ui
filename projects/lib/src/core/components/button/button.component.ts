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
  },
})
export class Button {
  /** The variant of the button. */
  variant = input<'primary' | 'secondary' | 'ghost' | 'outlined'>('primary');

  /** The size of the button. */
  size = input<'small' | 'default'>('default');

  /** The radius of the button. */
  radius = input<'none' | 'medium' | 'full'>('medium');

  /** Whether is loading. */
  loading = input(false);

  /** Whether the padding should be equal vertically and horizontally. */
  equalPadding = input(false);
}
