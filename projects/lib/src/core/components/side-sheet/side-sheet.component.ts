import { Component, input, output, computed, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { horizontalSlideTrigger } from './side-sheet.animations';
import { overlayTrigger } from '../../../shared/animations/animations';

/**
 * A sliding sheet component that can be positioned on either side of the screen.
 * The sheet slides in from the left or right edge and includes an overlay backdrop.
 *
 * @selector r-side-sheet
 */
@Component({
  selector: 'r-side-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-sheet.component.html',
  styleUrl: './side-sheet.component.css',
  animations: [overlayTrigger, horizontalSlideTrigger],
})
export class SideSheet {
  /** Controls the open/closed state of the sheet. Two-way bindable. */
  readonly isOpen = model(false);

  /** Determines which side the sheet appears from. Defaults to 'right'. */
  readonly side = input<'left' | 'right'>('right');

  /** Sets the width of the sheet. Accepts any valid CSS width value. */
  readonly width = input('300px');

  /** Computed signal that returns true if the sheet is positioned on the left */
  readonly isLeft = computed(() => this.side() === 'left');

  /** Computed signal that returns true if the sheet is positioned on the right */
  readonly isRight = computed(() => this.side() === 'right');

  /** Event emitted when the sheet should be closed */
  closeSheet = output<void>();
}
