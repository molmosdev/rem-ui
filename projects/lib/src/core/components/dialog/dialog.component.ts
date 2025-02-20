import {
  Component,
  contentChild,
  HostListener,
  input,
  model,
} from '@angular/core';
import { fadeInFadeOutTrigger } from '../../../shared/animations/animations';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { LazyContentDirective } from '../../../shared/directives/lazy-content.directive';

@Component({
  selector: 'r-dialog',
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: './dialog.component.html',
  animations: [fadeInFadeOutTrigger],
  styleUrl: './dialog.component.css',
})
export class Dialog {
  /** Indicates whether the dialog is shown */
  show = model.required<boolean>();

  /** Indicates whether clicking outside the dialog should close it */
  clickOutside = model<boolean>(true);

  /** Indicates whether the mobile bottom style is active */
  mobileBottomActive = input<boolean>(false);

  /** Lazy content directive */
  lazyContent = contentChild(LazyContentDirective);

  /**
   * Listen for keyboard escape events
   * @param event The keyboard event
   */
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event.key === 'Escape') {
      this.close();
      event.preventDefault();
    }
  }

  /**
   * Close the dialog
   */
  close(): void {
    if (this.clickOutside()) {
      this.show.set(false);
    }
  }
}
