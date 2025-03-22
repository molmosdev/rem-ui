import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  model,
} from '@angular/core';

@Component({
  selector: 'input[r-switch]',
  template: ``,
  styleUrl: './switch.component.css',
  host: {
    '[attr.role]': 'switch',
    '[attr.checked]': 'value()',
    '[attr.aria-checked]': 'value()',
    '(click)': 'value.set(!value())',
    '[class]': 'size()',
    '(keydown.enter)': 'value.set(!value())',
    '(keydown.arrowleft)': 'value.set(false)',
    '(keydown.arrowright)': 'value.set(true)',
  },
})
export class Switch implements AfterViewInit {
  /**
   * Value of the switch.
   */
  value = model<boolean>(false);

  /**
   * The size of the switch.
   */
  size = input<'default' | 'large'>('default');

  /**
   * Reference to the switch element.
   */
  el = inject(ElementRef);

  /**
   * Initializes the switch value after the view is initialized.
   */
  ngAfterViewInit() {
    this.value.set(this.el.nativeElement.checked);
  }
}
