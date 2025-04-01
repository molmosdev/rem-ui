import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'input[r-color-picker]',
  template: `hola`,
  styleUrl: './color-picker.component.css',
  host: {
    '[class.invalid]': 'invalid()',
    '[class.disabled]': 'disabled()',
    '[style.max-width]': 'maxWidth()',
    '[style.--max-width]': 'maxWidth()',
    '(input)': 'onColorChange($event)',
    '(focus)': 'focused.set(true)',
    '(blur)': 'focused.set(false)',
    '[style.--value]': 'value()',
  },
})
export class ColorPicker implements AfterViewInit {
  /**
   * Whether the input is invalid.
   */
  readonly invalid = model<boolean>(false);

  /**
   * Whether the input is disabled.
   */
  readonly disabled = model<boolean>(false);

  /**
   * The maximum width of the input.
   */
  readonly maxWidth = input<string>('');

  /**
   * The value of the input.
   */
  readonly value = signal<string>('#000000');

  /**
   * Whether the input is focused.
   */
  readonly focused = signal<boolean>(false);

  /**
   * Reference to the input element.
   */
  readonly el = inject<ElementRef<HTMLInputElement>>(ElementRef);

  /**
   * Reference to the ngModel directive.
   */
  private ngModel = inject(NgModel, { optional: true });

  /**
   * Event emitter for value changes.
   */
  readonly colorChange = output<string>();

  /**
   * After the view has been initialized, set the value of the select.
   */
  ngAfterViewInit(): void {
    this.value.set(this.el.nativeElement.value || this.ngModel?.model);
  }

  /**
   * Handle the input event and update the value.
   * @param event - The input event.
   */
  onColorChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.value.set(newValue);
    this.colorChange.emit(newValue);
  }
}
