import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'r-text-field',
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css',
  host: {
    '(input)': 'value.set($event.target.value)',
    '[class.error]': 'error()',
    '[class.disabled]': 'disabled()',
    '[style.max-width]': 'maxWidth()',
    '[class.active]': 'isActive()',
  },
})
export class TextField {
  /**
   * The type of the text field.
   */
  type = input<'text' | 'number' | 'password' | 'email' | 'search'>('text');

  /**
   * The label of the text field.
   */
  label = input<string | undefined>(undefined);

  /**
   * The value of the text field.
   */
  value = model<string | number | null>(null);

  /**
   * Whether the text field has an error.
   */
  error = input<boolean>(false);

  /**
   * Whether the text field is disabled.
   */
  disabled = input<boolean>(false);

  /**
   * The placeholder of the text field.
   */
  placeholder = input<string>('');

  /**
   * The icon of the text field.
   */
  maxWidth = input<string>('');

  /**
   * Whether the text field is focused.
   */
  focused = model<boolean>(false);

  /**
   * Whether the text field has a label.
   */
  isActive = computed(
    () => (this.focused() || this.value() || this.placeholder()) && this.label()
  );

  /**
   * The input element.
   */
  onValueChange(event: any) {
    this.value.set(event.target.value);
  }
}
