import { Component, computed, input, model, output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Spinner } from '../spinner/spinner.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'r-text',
  imports: [NgClass, Spinner],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css',
  animations: [
    trigger('errorState', [
      state(
        'true',
        style({
          color: 'var(--error-foreground, #c40000ab)',
          backgroundColor: 'var(--error, #fff0f0)',
          borderColor: 'var(--error-foreground, #c40000ab)',
        })
      ),
      state(
        'false',
        style({
          color: 'var(--input-foreground, #798194)',
          backgroundColor:
            'color-mix(in srgb, var(--foreground, #798194) 5%, var(--background, #ffffff))',
          borderColor: 'var(--border-color, transparent)',
        })
      ),
      transition('false <=> true', animate('0.2s')),
    ]),
  ],
})
export class Text {
  value = model<string | null>(null);
  displayValue = computed(() => this.value() || '');
  label = input<string | undefined>(undefined);
  error = input<boolean>(false);
  hasValueForced = input<boolean>(false);
  changeEmitter = output<string | null>();
  clearable = input<boolean>(false);
  disabled = model<boolean>(false);
  searching = input<boolean>(false);

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
