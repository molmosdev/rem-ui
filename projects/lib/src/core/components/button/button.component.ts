import { Component, input, output } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Spinner } from '../spinner/spinner.component';
import { fadeInOutTrigger } from '../../../shared/animations/animations';

interface LinkConfig {
  href: string;
  target?: string;
}

@Component({
  selector: 'r-button',
  imports: [NgClass, Spinner, NgTemplateOutlet],
  templateUrl: './button.component.html',
  animations: [fadeInOutTrigger],
})
export class Button {
  type = input<'primary' | 'secondary' | 'ghost'>('primary');
  loading = input<boolean>(false);
  disabled = input<boolean>(false);
  link = input<LinkConfig>();
  clickEmitter = output<void>();
}
