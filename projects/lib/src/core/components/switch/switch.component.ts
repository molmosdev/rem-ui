import { Component, input, model, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'r-switch',
  imports: [NgClass],
  templateUrl: './switch.component.html',
})
export class Switch {
  value = model(false);
  label = input<string>('');
  changeEmitter = output<boolean>();

  /**
   * Toggle the switch value
   */
  toggleSwitch(): void {
    this.value.set(!this.value());
    this.changeEmitter.emit(this.value());
  }
}
