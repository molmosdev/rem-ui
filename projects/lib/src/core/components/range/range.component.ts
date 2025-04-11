import {
  Component,
  ElementRef,
  inject,
  model,
  input,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'input[r-range]',
  template: ``,
  styleUrl: './range.component.css',
  host: {
    '[attr.value]': 'value()',
    '[style.max-width]': 'maxWidth()',
    '(input)': 'onInput($event)',
  },
})
export class Range implements AfterViewInit {
  /**
   * Current value of the range.
   */
  readonly value = model<string>('0');

  /**
   * Maximum width of the range slider.
   */
  readonly maxWidth = input<string>('100%');

  /**
   * Reference to the range element.
   */
  el = inject(ElementRef);

  /**
   * Initializes the range value after the view is initialized.
   */
  ngAfterViewInit() {
    this.value.set(this.el.nativeElement.value);
  }

  /**
   * Handles the input event to update the value.
   */
  onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
