import {
  Component,
  ElementRef,
  inject,
  model,
  output,
  input,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'input[r-range]',
  template: ``,
  styleUrl: './range.component.css',
  host: {
    '[attr.type]': '"range"',
    '[attr.min]': 'min',
    '[attr.max]': 'max',
    '[attr.step]': 'step',
    '[attr.value]': 'value()',
    '[style.max-width]': 'maxWidth()',
    '(input)': 'onInput($event)',
  },
})
export class Range implements AfterViewInit {
  /**
   * Minimum value of the range.
   */
  min = '0';

  /**
   * Maximum value of the range.
   */
  max = '100';

  /**
   * Step value of the range.
   */
  step = '1';

  /**
   * Current value of the range.
   */
  readonly value = model<number>(50);

  /**
   * Maximum width of the range slider.
   */
  readonly maxWidth = input<string>('100%');

  /**
   * Event emitted when the value changes.
   */
  valueChange = output<number>();

  /**
   * Reference to the range element.
   */
  el = inject(ElementRef);

  /**
   * Initializes the range value after the view is initialized.
   */
  ngAfterViewInit() {
    this.value.set(Number(this.el.nativeElement.value));
  }

  /**
   * Handles the input event to update the value.
   */
  onInput(event: Event) {
    const newValue = Number((event.target as HTMLInputElement).value);
    this.value.set(newValue);
    this.valueChange.emit(newValue);
  }
}
