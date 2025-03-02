import {
  Component,
  model,
  viewChild,
  ElementRef,
  linkedSignal,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'r-attached-box',
  templateUrl: './attached-box.component.html',
  styleUrl: './attached-box.component.css',
})
export class AttachedBoxComponent {
  /**
   * The trigger element that will be used to open the content.
   */
  trigger = viewChild<ElementRef>('trigger');

  /**
   * The content that will be displayed when the trigger.
   */
  content = viewChild<ElementRef>('content');

  /**
   * The position of the content relative to the trigger.
   */
  position = model<'top' | 'bottom' | 'left' | 'right'>('top');

  /**
   * The visibility of the content.
   */
  isContentVisible = model<boolean>(false);

  /**
   * The adjusted position of the content relative to the trigger.
   */
  adjustedPosition = linkedSignal(() => this.calculateAdjustedPosition());

  /**
   * Recalculates the position of the content when the window is scrolled.
   */
  @HostListener('window:scroll')
  onScroll() {
    this.position.set(this.calculateAdjustedPosition());
  }

  /**
   * Calculates the adjusted position of the content relative to the trigger.
   * @returns The adjusted position ('top', 'bottom', 'left', or 'right').
   */
  private calculateAdjustedPosition(): 'top' | 'bottom' | 'left' | 'right' {
    const triggerElement = this.trigger()!.nativeElement;
    const contentElement = this.content()!.nativeElement;
    const triggerRect = triggerElement.getBoundingClientRect();
    const contentRect = contentElement.getBoundingClientRect();

    if (
      this.position() === 'bottom' &&
      triggerRect.bottom + contentRect.height > window.innerHeight
    ) {
      return 'top';
    } else if (
      this.position() === 'top' &&
      triggerRect.top - contentRect.height < 0
    ) {
      return 'bottom';
    } else if (
      this.position() === 'right' &&
      triggerRect.right + contentRect.width > window.innerWidth
    ) {
      return 'left';
    } else if (
      this.position() === 'left' &&
      triggerRect.left - contentRect.width < 0
    ) {
      return 'right';
    }
    return this.position();
  }

  /**
   * Toggles the visibility of the content.
   */
  toggleContentVisibility() {
    this.isContentVisible.set(!this.isContentVisible());
  }
}
