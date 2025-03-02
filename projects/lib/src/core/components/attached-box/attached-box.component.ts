import {
  Component,
  model,
  viewChild,
  ElementRef,
  linkedSignal,
  HostListener,
} from '@angular/core';

type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom';

type Direction = 'top' | 'bottom' | 'left' | 'right';
type Alignment = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'r-attached-box',
  templateUrl: './attached-box.component.html',
  styleUrl: './attached-box.component.css',
})
export class AttachedBox {
  /**
   * The trigger element that will be used to open the content.
   */
  trigger = viewChild<ElementRef>('trigger');

  /**
   * The content that will be displayed when the trigger is activated.
   */
  content = viewChild<ElementRef>('content');

  /**
   * The position of the content relative to the trigger.
   * принимаемые значения 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom'
   */
  position = model<Position>('bottom-left');

  /**
   * Signal indicating whether the content is visible or not.
   */
  isContentVisible = model<boolean>(false);

  /**
   * Signal that dynamically calculates and provides the adjusted position of the content.
   * This position is adjusted to prevent overflow and ensure optimal visibility.
   */
  adjustedPosition = linkedSignal<Position>(() =>
    this.calculateAdjustedPosition()
  );

  /**
   * Recalculates and updates the content's adjusted position when the window is scrolled.
   * This ensures the content remains correctly positioned relative to the trigger even when scrolling.
   */
  @HostListener('window:scroll')
  onScroll(): void {
    this.adjustedPosition.set(this.calculateAdjustedPosition());
  }

  /**
   * Closes the content when a click event occurs outside both the trigger and content elements.
   * @param event The mouse event representing the click.
   */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.trigger()?.nativeElement || !this.content()?.nativeElement) {
      return;
    }

    const triggerElement = this.trigger()!.nativeElement;
    const contentElement = this.content()!.nativeElement;

    if (
      !triggerElement.contains(event.target as Node) &&
      !contentElement.contains(event.target as Node)
    ) {
      this.isContentVisible.set(false);
    }
  }

  /**
   * Toggles the visibility of the content, switching between visible and hidden states.
   * This method is typically called in response to user interaction with the trigger element.
   */
  toggleContentVisibility(): void {
    this.isContentVisible.set(!this.isContentVisible());
  }

  /**
   * Calculates the optimal adjusted position for the content relative to the trigger.
   * This method considers available space in the viewport to prevent content overflow
   * and ensures the content is fully visible to the user.
   * @returns The adjusted position as a Position type string (e.g., 'bottom-left').
   */
  private calculateAdjustedPosition(): Position {
    if (!this.trigger()?.nativeElement || !this.content()?.nativeElement) {
      return this.position();
    }

    const triggerElement = this.trigger()!.nativeElement;
    const contentElement = this.content()!.nativeElement;

    const triggerRect = triggerElement.getBoundingClientRect();
    const contentRect = contentElement.getBoundingClientRect();
    const fontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const extraMargin = fontSize * 2;
    const [primary, secondary] = this.position().split('-') as [
      Direction,
      Alignment,
    ];

    const adjustedPrimary = this.adjustPrimaryDirection(
      primary,
      triggerRect,
      contentRect,
      extraMargin
    );
    const adjustedSecondary = this.adjustSecondaryAlignment(
      secondary,
      adjustedPrimary,
      triggerRect,
      contentRect
    );

    return `${adjustedPrimary}-${adjustedSecondary}` as Position;
  }

  /**
   * Adjusts the primary direction (top, bottom, left, right) of the content's position
   * based on available viewport space. This ensures the content does not overflow the screen
   * in the primary direction.
   * @param primary The initially desired primary direction.
   * @param triggerRect The bounding rectangle of the trigger element.
   * @param contentRect The bounding rectangle of the content element.
   * @param margin Extra margin to consider for spacing around the content.
   * @returns The adjusted primary direction.
   */
  private adjustPrimaryDirection(
    primary: Direction,
    triggerRect: DOMRect,
    contentRect: DOMRect,
    margin: number
  ): Direction {
    if (['top', 'bottom'].includes(primary)) {
      const neededSpace = contentRect.height + margin;
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      if (
        primary === 'bottom' &&
        spaceBelow < neededSpace &&
        spaceAbove > spaceBelow
      ) {
        return 'top';
      }
      if (
        primary === 'top' &&
        spaceAbove < neededSpace &&
        spaceBelow > spaceAbove
      ) {
        return 'bottom';
      }
    } else {
      const neededSpace = contentRect.width + margin;
      const spaceRight = window.innerWidth - triggerRect.right;
      const spaceLeft = triggerRect.left;

      if (
        primary === 'right' &&
        spaceRight < neededSpace &&
        spaceLeft > spaceRight
      ) {
        return 'left';
      }
      if (
        primary === 'left' &&
        spaceLeft < neededSpace &&
        spaceRight > spaceLeft
      ) {
        return 'right';
      }
    }
    return primary;
  }

  /**
   * Adjusts the secondary alignment (left, right for top/bottom primary, top, bottom for left/right primary)
   * of the content's position to prevent horizontal or vertical overflow. This method ensures that
   * the content is fully visible within the viewport in the secondary dimension.
   * @param secondary The initially desired secondary alignment.
   * @param primary The already adjusted primary direction.
   * @param triggerRect The bounding rectangle of the trigger element.
   * @param contentRect The bounding rectangle of the content element.
   * @returns The adjusted secondary alignment.
   */
  private adjustSecondaryAlignment(
    secondary: Alignment,
    primary: Direction,
    triggerRect: DOMRect,
    contentRect: DOMRect
  ): Alignment {
    if (['top', 'bottom'].includes(primary)) {
      if (secondary === 'left') {
        const contentRightPos = triggerRect.left + contentRect.width;
        if (contentRightPos > window.innerWidth) {
          return 'right';
        }
      } else if (secondary === 'right') {
        const contentLeftPos = triggerRect.right - contentRect.width;
        if (contentLeftPos < 0) {
          return 'left';
        }
      }
    } else if (['left', 'right'].includes(primary)) {
      if (secondary === 'top') {
        const contentBottomPos = triggerRect.top + contentRect.height;
        if (contentBottomPos > window.innerHeight) {
          return 'bottom';
        }
      } else if (secondary === 'bottom') {
        const contentTopPos = triggerRect.bottom - contentRect.height;
        if (contentTopPos < 0) {
          return 'top';
        }
      }
    }
    return secondary;
  }
}
