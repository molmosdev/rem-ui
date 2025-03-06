import { Component, input } from '@angular/core';
import { Spinner } from '../spinner/spinner.component';

@Component({
  selector: 'button[r-button]',
  imports: [Spinner],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host: {
    '[class]': 'variant()',
  },
})
export class Button {
  /** The variant of the button. */
  variant = input<'primary' | 'secondary' | 'ghost'>('primary');

  /** Whether is loading. */
  loading = input(false);
}
