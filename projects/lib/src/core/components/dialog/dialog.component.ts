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
})
export class Dialog {
  show = model.required<boolean>();
  lazyContent = contentChild(LazyContentDirective);
  clickOutside = model<boolean>(true);
  mobileBottomActive = input<boolean>(false);

  /**
   * Listen for keyboard escape events
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
