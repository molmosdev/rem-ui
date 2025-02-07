import {
  Component,
  input,
  output,
  model,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { verticalSlideTrigger } from './bottom-sheet.animations';
import { overlayTrigger } from '../../../public-api';

@Component({
  selector: 'r-bottom-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.css',
  animations: [overlayTrigger, verticalSlideTrigger],
})
export class BottomSheet {
  /** Indicates whether the bottom sheet is open. */
  isOpen = model(false);

  /** The height of the bottom sheet. */
  height = input('30dvh');

  /** The threshold for closing the bottom sheet. */
  closeThreshold = input(30);

  /** Event emitted when the bottom sheet is closed. */
  closeSheet = output<void>();

  /** Indicates whether a drag event is in progress. */
  private isDragging = signal(false);

  /** The starting Y-coordinate of the drag event. */
  private startY = signal(0);

  /** The current translation in the Y-axis during a drag event. */
  currentTranslateY = signal(0);

  /** The height of the content inside the bottom sheet. */
  private contentHeight = signal(0);

  /** The current animation state of the bottom sheet. */
  animationState = computed(() => {
    return this.isDragging()
      ? 'intermediate'
      : this.isOpen()
        ? 'open'
        : 'closed';
  });

  /**
   * Handles the start of a drag event.
   * @param event The mouse or touch event.
   */
  onDragStart(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.isDragging.set(true);
    this.startY.set(this.getEventY(event));
    this.currentTranslateY.set(0);
  }

  /**
   * Handles the movement during a drag event.
   * @param event The mouse or touch event.
   */
  onDragMove(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging()) return;
    event.preventDefault();
    const currentY = this.getEventY(event);
    const deltaY = currentY - this.startY();
    this.currentTranslateY.set(Math.max(0, deltaY));
  }

  /**
   * Handles the end of a drag event.
   */
  onDragEnd(): void {
    const heightValue = this.getHeightInPixels();
    const threshold = heightValue * (this.closeThreshold() / 100);
    this.isDragging.set(false);

    if (this.currentTranslateY() > threshold) {
      this.isOpen.set(false);
      this.closeSheet.emit();
    } else {
      this.isOpen.set(true);
    }
  }

  /**
   * Converts the height value to pixels.
   * @returns The height in pixels.
   */
  private getHeightInPixels(): number {
    if (this.height() === 'auto') {
      return this.contentHeight();
    }
    const element = document.createElement('div');
    element.style.height = this.height();
    document.body.appendChild(element);
    const heightInPixels = element.getBoundingClientRect().height;
    document.body.removeChild(element);
    return heightInPixels;
  }

  /**
   * Gets the Y-coordinate from the event.
   * @param event The mouse or touch event.
   * @returns The Y-coordinate.
   */
  private getEventY(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
      ? event.clientY
      : event.touches[0].clientY;
  }
}
