import { Component, input, output, computed, model } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * A sliding panel component that can be positioned on either side of the screen.
 * The panel slides in from the left or right edge and includes an overlay backdrop.
 *
 * @selector r-side-panel
 */
@Component({
  selector: 'r-side-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-panel.component.html',
  host: {
    '[class.side-panel-container]': 'true',
  },
})
export class SidePanel {
  /** Controls the open/closed state of the panel. Two-way bindable. */
  isOpen = model(false);

  /** Determines which side the panel appears from. Defaults to 'right'. */
  side = input<'left' | 'right'>('right');

  /** Sets the width of the panel. Accepts any valid CSS width value. */
  width = input('300px');

  /** Computed signal that returns true if the panel is positioned on the left */
  isLeft = computed(() => this.side() === 'left');

  /** Computed signal that returns true if the panel is positioned on the right */
  isRight = computed(() => this.side() === 'right');

  /** Event emitted when the panel should be closed */
  closePanel = output<void>();
}
