import { Component, input, output } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Spinner } from '../spinner/spinner.component';
import { fadeInFadeOutTrigger } from '../../../shared/animations/animations';

interface LinkConfig {
  href: string;
  target?: string;
}

@Component({
  selector: 'r-button',
  imports: [NgClass, Spinner, NgTemplateOutlet],
  templateUrl: './button.component.html',
  animations: [fadeInFadeOutTrigger],
  styleUrl: './button.component.css',
})
export class Button {
  /** The type of the button. */
  type = input<'primary' | 'secondary' | 'ghost'>('primary');

  /** Indicates whether the button is in a loading state. */
  loading = input<boolean>(false);

  /** Indicates whether the button is disabled. */
  disabled = input<boolean>(false);

  /** Configuration for the link, if the button is used as a link. */
  link = input<LinkConfig>();

  /** Event emitted when the button is clicked. */
  clickEmitter = output<void>();
}
