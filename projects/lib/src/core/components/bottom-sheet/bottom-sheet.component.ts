import {
  Component,
  input,
  output,
  model,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * A sliding bottom sheet component that can be dragged to dismiss.
 * Includes a drag handle and supports both touch and mouse interactions.
 */
@Component({
  selector: 'r-bottom-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-sheet.component.html',
})
export class BottomSheet {
  /** Controls the open/closed state of the sheet. Two-way bindable property that determines if the bottom sheet is visible. */
  isOpen = model(false);

  /** Sets the height of the bottom sheet. Accepts any valid CSS height value (px, %, vh, etc) or 'auto'. */
  height = input('300px');

  /** Sets the threshold percentage for closing the sheet. When dragging, if the sheet is pulled down past this percentage of its height, it will close. */
  closeThreshold = input(30);

  /** Event emitted when the sheet should be closed. Triggered by dragging past threshold or clicking overlay. */
  closeSheet = output<void>();

  /** Internal signal tracking if the sheet is being dragged */
  private isDragging = signal(false);

  /** Internal signal storing the initial Y position when drag starts */
  private startY = signal(0);

  /** Internal signal tracking the current vertical translation */
  private currentTranslateY = signal(0);

  /** Internal signal tracking the actual height of the content */
  private contentHeight = signal(0);

  /** Returns CSS transform string for sheet position */
  transformStyle = computed(() => {
    if (!this.isOpen()) {
      return 'translateY(100%)';
    }
    // Apply drag offset if it exists
    return `translateY(${this.currentTranslateY()}px)`;
  });

  /** Returns CSS transition string for smooth animations */
  transitionStyle = computed(() =>
    this.isDragging() ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  );

  /**
   * Handles the start of a drag operation
   * @param event The Mouse or Touch event that initiated the drag
   */
  onDragStart(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.isDragging.set(true);
    this.startY.set(this.getEventY(event));
    this.currentTranslateY.set(0);

    // Update content height if height is 'auto'
    if (this.height() === 'auto') {
      const element = event.target as HTMLElement;
      const sheet = element.closest('.bottom-sheet');
      if (sheet) {
        this.contentHeight.set(sheet.getBoundingClientRect().height);
      }
    }
  }

  /**
   * Handles continuous drag movement
   * @param event The Mouse or Touch event during drag
   */
  onDragMove(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging()) return;

    event.preventDefault();
    const currentY = this.getEventY(event);
    const deltaY = currentY - this.startY();

    // Only allow downward sliding (positive values)
    const newTranslateY = Math.max(0, deltaY);
    this.currentTranslateY.set(newTranslateY);
  }

  /**
   * Closes the sheet with a sliding animation
   */
  private closeWithAnimation(): void {
    const heightValue =
      this.height() === 'auto' ? this.contentHeight() : parseInt(this.height());

    // First animate to bottom
    this.currentTranslateY.set(heightValue);

    // Wait for the sheet to reach bottom before closing
    setTimeout(() => {
      this.closeSheet.emit();
      this.isOpen.set(false);
      // Reset position after it's hidden
      setTimeout(() => {
        this.currentTranslateY.set(0);
      }, 100);
    }, 300);
  }

  /**
   * Returns the sheet to its original open position
   */
  private returnToOpenPosition(): void {
    // First enable transition
    this.isDragging.set(false);

    // Wait for next frame to apply transition
    requestAnimationFrame(() => {
      // Now move to initial position
      this.currentTranslateY.set(0);
    });
  }

  /**
   * Handles the end of drag operation, determines whether to close or return to position
   */
  onDragEnd(): void {
    const heightValue =
      this.height() === 'auto' ? this.contentHeight() : parseInt(this.height());
    const threshold = heightValue * (this.closeThreshold() / 100);

    if (this.currentTranslateY() > threshold) {
      this.isDragging.set(false);
      this.closeWithAnimation();
    } else {
      this.returnToOpenPosition();
    }
  }

  /**
   * Handles click events on the overlay background
   */
  onOverlayClick(): void {
    this.closeWithAnimation();
  }

  /**
   * Extracts the Y coordinate from either mouse or touch events
   * @param event The Mouse or Touch event to get coordinates from
   * @returns The clientY coordinate of the event
   */
  private getEventY(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
      ? event.clientY
      : event.touches[0].clientY;
  }
}
