import { NgClass } from '@angular/common';
import { Component, ElementRef, output, input, signal } from '@angular/core';

@Component({
  selector: 'r-option',
  templateUrl: './option.component.html',
  imports: [NgClass],
  styleUrl: './option.component.css',
})
export class Option {
  value = input.required<string>();
  disabled = input<boolean>(false);
  prefix = input<string>('');
  suffix = input<string>('');
  selected = signal<boolean>(false);
  highlighted = signal<boolean>(false);
  selectEmitter = output<Option>();

  constructor(public el: ElementRef) {}

  /**
   * Emit the select event when the option is selected.
   */
  onSelect() {
    if (!this.disabled()) {
      this.selectEmitter.emit(this);
    }
  }

  /**
   * Highlight the option on mouse enter if it is not disabled and not in keyboard-active mode.
   */
  onMouseEnter() {
    if (
      !this.disabled() &&
      !this.el.nativeElement.parentElement.parentElement.classList.contains(
        'keyboard-active'
      )
    ) {
      this.highlighted.set(true);
    }
  }

  /**
   * Remove the highlight from the option on mouse leave if it is not disabled and not in keyboard-active mode.
   */
  onMouseLeave() {
    if (
      !this.disabled() &&
      !this.el.nativeElement.parentElement.parentElement.classList.contains(
        'keyboard-active'
      )
    ) {
      this.highlighted.set(false);
    }
  }
}
