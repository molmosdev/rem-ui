import { Component, computed, input, model, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'r-textarea',
  imports: [NgClass],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
})
export class Textarea {
  value = model<string | null>(null);
  displayValue = computed(() => this.value() || '');
  label = input<string | undefined>(undefined);
  error = input<boolean>(false);
  hasValueForced = input<boolean>(false);
  changeEmitter = output<string | null>();

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
}
