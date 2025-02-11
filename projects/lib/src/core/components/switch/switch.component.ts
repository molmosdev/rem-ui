import { Component, input, model, output } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'r-switch',
  imports: [NgClass],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
  animations: [
    trigger('switchState', [
      state('false', style({ transform: 'translateX(0)', opacity: 0.3 })),
      state('true', style({ transform: 'translateX(100%)' })),
      transition('false <=> true', animate('0.3s')),
    ]),
  ],
})
export class Switch {
  value = model(false);
  label = input<string>('');
  changeEmitter = output<boolean>();
  size = input<string>('default');

  /**
   * Toggle the switch value
   */
  toggleSwitch(): void {
    this.value.set(!this.value());
    this.changeEmitter.emit(this.value());
  }
}
