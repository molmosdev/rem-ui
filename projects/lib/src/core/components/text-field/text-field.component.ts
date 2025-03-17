import {
  Component,
  computed,
  ElementRef,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'r-text-field',
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css',
  host: {
    '[class.error]': 'error()',
    '[class.disabled]': 'disabled()',
    '[style.max-width]': 'maxWidth()',
    '[class.active-with-label]': 'isActive() && label()',
  },
})
export class TextField {
  /**
   * The type of the text field.
   */
  readonly type = input<'text' | 'number' | 'password' | 'email'>('text');

  /**
   * Indicates if the text field is of number type.
   */
  readonly isNumberType = computed(() => this.type() === 'number');

  /**
   * The label of the text field.
   */
  readonly label = input<string | undefined>(undefined);

  /**
   * The value of the text field.
   */
  readonly value = model<string | number | null>(null);

  /**
   * Indicates if the text field has an error.
   */
  readonly error = input<boolean>(false);

  /**
   * Indicates if the text field is disabled.
   */
  readonly disabled = input<boolean>(false);

  /**
   * The placeholder of the text field.
   */
  readonly placeholder = input<string>('');

  /**
   * The maximum width of the text field.
   */
  readonly maxWidth = input<string>('');

  /**
   * Indicates if the text field is focused.
   */
  readonly focused = signal<boolean>(false);

  /**
   * Indicates if the text field has a label and is active.
   */
  readonly isActive = computed(
    () => this.focused() || this.value() || this.placeholder()
  );

  /**
   * The number type of the text field.
   */
  readonly numberType = input<'integer' | 'decimal'>('integer');

  /**
   * The number of decimals for decimal type.
   */
  readonly decimals = input<number>(1);

  /**
   * Reference to the input element.
   */
  readonly input = viewChild<ElementRef>('input');

  /**
   * Event emitted when the value changes.
   */
  valueChange = output<string | number | null>();

  /**
   * The autocomplete value of the input.
   */
  readonly autoComplete = input<string>('off');

  /**
   * Handles the input value change.
   */
  onInputValueChange(event: Event): void {
    const target = event.target as HTMLInputElement;

    // If the input is not of number type, update the value and emit the value change event.
    if (!this.isNumberType()) {
      this.value.set(target.value);
      this.valueChange.emit(target.value);
    }
  }

  /**
   * The blur event handler.
   */
  onInputBlur(event: any) {
    this.focused.set(false);

    // If the input is of number type, format the value and emit the value change event.
    if (this.isNumberType()) {
      const formattedValue = this.formatNumber(event.target.value);
      this.input()!.nativeElement.value = formattedValue;
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
