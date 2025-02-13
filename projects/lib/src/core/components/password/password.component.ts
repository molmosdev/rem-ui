import {
  Component,
  computed,
  HostBinding,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { HostListener } from '@angular/core';
import { Spinner } from '../spinner/spinner.component';
import {
  errorRightButtonStateTrigger,
  errorStateTrigger,
  labelStateTrigger,
  inputPaddingStateTrigger,
  disabledStateTrigger,
  labelErrorStateTrigger,
} from '../../../shared/animations/animations';

@Component({
  selector: 'r-password',
  imports: [Spinner],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
  animations: [
    errorStateTrigger,
    labelErrorStateTrigger,
    errorRightButtonStateTrigger,
    labelStateTrigger,
    inputPaddingStateTrigger,
    disabledStateTrigger,
  ],
})
export class Password {
  @HostBinding('@disabledStateTrigger')
  get animationState() {
    return this.disabled();
  }
  value = model<string | null>(null);
  displayValue = computed(() => this.value() || '');
  label = input<string | undefined>(undefined);
  error = input<boolean>(false);
  hasValueForced = input<boolean>(false);
  changeEmitter = output<string | null>();
  clearable = input<boolean>(false);
  disabled = model<boolean>(false);
  searching = input<boolean>(false);
  focused = signal<boolean>(false);
  placeholder = input<string>('');
  displayPlaceholder = computed(() => this.placeholder() || '');
  inputTriggerState = computed(() =>
    this.label() ? (this.displayValue() ? 'hasValue' : 'null') : 'withoutLabel'
  );
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
  showPasswordToggle = input<boolean>(false);
  showPassword = signal<boolean>(false);

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
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

  /**
   * Update the value
   * @param event - The keyboard event
   */
  updateValue(event: KeyboardEvent): void {
    const newValue = (event.target as HTMLInputElement).value;
    if (newValue !== this.value()) {
      this.value.set(newValue === '' ? null : newValue);
      this.changeEmitter.emit(this.value());
    }
  }

  /**
   * Clear the value
   */
  clear() {
    this.value.set(null);
    this.changeEmitter.emit(null);
  }
}
