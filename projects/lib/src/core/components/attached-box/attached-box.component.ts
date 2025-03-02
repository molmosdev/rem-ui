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
export class AttachedBox {
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
  position = model<
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-top'
    | 'left-bottom'
    | 'right-top'
    | 'right-bottom'
  >('bottom-left');

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
   * Closes the content if clicked outside.
   */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const triggerElement = this.trigger()?.nativeElement;
    const contentElement = this.content()?.nativeElement;
    if (
      triggerElement &&
      contentElement &&
      !triggerElement.contains(event.target as Node) &&
      !contentElement.contains(event.target as Node)
    ) {
      this.isContentVisible.set(false);
    }
  }

  /**
   * Calculates the adjusted position of the content relative to the trigger.
   * @returns The adjusted position.
   */
  private calculateAdjustedPosition():
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-top'
    | 'left-bottom'
    | 'right-top'
    | 'right-bottom' {
    const triggerElement = this.trigger()!.nativeElement;
    const contentElement = this.content()!.nativeElement;
    const triggerRect = triggerElement.getBoundingClientRect();
    const contentRect = contentElement.getBoundingClientRect();

    if (
      this.position().startsWith('bottom') &&
      triggerRect.bottom + contentRect.height > window.innerHeight
    ) {
      return this.position().replace('bottom', 'top') as
        | 'top-left'
        | 'top-right';
    } else if (
      this.position().startsWith('top') &&
      triggerRect.top - contentRect.height < 0
    ) {
      return this.position().replace('top', 'bottom') as
        | 'bottom-left'
        | 'bottom-right';
    } else if (
      this.position().startsWith('right') &&
      triggerRect.right + contentRect.width > window.innerWidth
    ) {
      return this.position().replace('right', 'left') as
        | 'left-top'
        | 'left-bottom';
    } else if (
      this.position().startsWith('left') &&
      triggerRect.left - contentRect.width < 0
    ) {
      return this.position().replace('left', 'right') as
        | 'right-top'
        | 'right-bottom';
    }
    return this.position() as
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
      | 'left-top'
      | 'left-bottom'
      | 'right-top'
      | 'right-bottom';
  }

  /**
   * Toggles the visibility of the content.
   */
  toggleContentVisibility() {
    this.isContentVisible.set(!this.isContentVisible());
  }
}
