import {
  Component,
  computed,
  ElementRef,
  inject,
  input,
  model,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'input[r-input]',
  template: ``,
  styleUrl: './input.component.css',
  host: {
    '[type]': 'type()',
    '[placeholder]': 'placeholder()',
    '[value]': 'value()',
    '[class.invalid]': 'invalid()',
    '[class.disabled]': 'disabled()',
    '[style.max-width]': 'maxWidth()',
    '[class.label-up]': '(focused() || value() || placeholder()) && hasLabel()',
    '(input)': 'onInput($event)',
    '(focus)': 'focused.set(true)',
    '(blur)': 'onBlur($event)',
  },
})
export class Input {
  /**
   * The type of the input.
   */
  readonly type = input<'text' | 'number' | 'password' | 'email'>('text');

  /**
   * The placeholder text for the input.
   */
  readonly placeholder = input<string>('');

  /**
   * The value of the input.
   */
  value = model<string | number | null>(null);

  /**
   * Whether the input is invalid.
   */
  invalid = model<boolean>(false);

  /**
   * Whether the input is disabled.
   */
  disabled = model<boolean>(false);

  /**
   * The maximum width of the input.
   */
  readonly maxWidth = input<string>('');

  /**
   * The number of decimal places for number input.
   */
  readonly decimals = input<number>(2);

  /**
   * The type of number input (integer or decimal).
   */
  readonly numberType = input<'integer' | 'decimal'>('integer');

  /**
   * Whether the input type is number.
   */
  readonly isNumberType = computed(() => this.type() === 'number');

  /**
   * Whether the input is focused.
   */
  focused = signal<boolean>(false);

  /**
   * Whether the input has a label.
   */
  hasLabel = signal<boolean>(false);

  /**
   * Event emitted when the value changes.
   */
  valueChange = output<string | number | null>();

  /**
   * Reference to the input element.
   */
  readonly el = inject<ElementRef<HTMLInputElement>>(ElementRef);

  /**
   * Handles the input event.
   * @param event The input event.
   */
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    // If the input is not of number type, update the value and emit the value change event.
    if (!this.isNumberType()) {
      this.value.set(target.value);
      this.valueChange.emit(target.value);
    }
  }

  /**
   * The blur event handler.
   * @param event - The blur event.
   */
  onBlur(event: any): void {
    this.focused.set(false);

    // If the input is of number type, format the value and emit the value change event.
    if (this.isNumberType()) {
      const formattedValue = this.formatNumber(event.target.value);
      this.el.nativeElement.value = formattedValue || '';
      this.value.set(formattedValue);
      this.valueChange.emit(formattedValue);
    }
  }

  /**
   * Formats the number value.
   * @param value - The value to format.
   * @returns The formatted value.
   */
  formatNumber(value: string | null) {
    if (value) {
      const numericValue = Number(value);
      return this.numberType() === 'integer'
        ? Math.round(numericValue).toString()
        : numericValue.toFixed(this.decimals());
    } else {
      return null;
    }
  }
}
