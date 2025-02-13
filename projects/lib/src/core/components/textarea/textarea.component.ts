import {
  Component,
  computed,
  HostListener,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import {
  disabledStateTrigger,
  errorStateTrigger,
  inputPaddingStateTrigger,
  textareaLabelStateTrigger,
} from '../../../shared/animations/animations';

@Component({
  selector: 'r-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
  animations: [
    errorStateTrigger,
    textareaLabelStateTrigger,
    inputPaddingStateTrigger,
    disabledStateTrigger,
  ],
})
export class Textarea {
  value = model<string | null>(null);
  displayValue = computed(() => this.value() || '');
  label = input<string | undefined>(undefined);
  error = input<boolean>(false);
  hasValueForced = input<boolean>(false);
  changeEmitter = output<string | null>();
  disabled = model<boolean>(false);
  placeholder = input<string | undefined>(undefined);
  displayPlaceholder = computed(() => this.placeholder() || '');
  labelState = computed(() =>
    this.displayValue() || this.focused() || this.placeholder()
      ? 'small'
      : 'normal'
  );
  inputPaddingState = computed(() =>
    this.label() &&
    (this.displayValue() || this.focused() || this.placeholder())
      ? 'small'
      : 'normal'
  );
  focused = signal<boolean>(false);

  /**
   * Get the input trigger state
   * @returns {string} - The input trigger state
   */
  get inputTriggerState(): string {
    return this.label() ? (this.value() ? 'hasValue' : 'null') : 'withoutLabel';
  }

  /**
   * Update the value
   * @param {KeyboardEvent} event - The keyboard event
   */
  updateValue(event: KeyboardEvent): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.value.set(newValue === '' ? null : newValue);
    this.changeEmitter.emit(this.value());
  }

  /**
   * Handle focus in event
   */
  @HostListener('focusin')
  onFocusIn() {
    this.focused.set(true);
  }

  /**
   * Handle focus out event
   */
  @HostListener('focusout')
  onFocusOut() {
    this.focused.set(false);
  }
}
