import { Component, computed, input, output } from '@angular/core';
import { Icon } from '../icon/icon.component';

@Component({
  selector: 'r-alert',
  templateUrl: './alert.component.html',
  imports: [Icon],
  styleUrls: ['./alert.component.css'],
  host: {
    '[class]': 'type()',
    '[style.max-width]': 'maxWidth()',
  },
})
export class Alert {
  /** The type of the alert. */
  readonly type = input<'success' | 'error' | 'warning' | 'info'>('info');

  /** The title of the alert. */
  readonly title = input<string | null>(null);

  /** The icon of the alert. */
  readonly icon = input<string | null>(null);

  /** Whether the alert is dismissible. */
  readonly dismissible = input(false);

  /** Event emitted when the alert is dismissed. */
  readonly dismissed = output<void>();

  /** The maximum width of the alert. */
  readonly maxWidth = input<string | null>(null);

  /** The color foreground of the alert. */
  readonly colorForeground = computed(() => {
    return this.type() === 'info'
      ? 'var(--secondary-foreground)'
      : `var(--${this.type()}-foreground)`;
  });

  dismiss(): void {
    this.dismissed.emit();
  }
}
