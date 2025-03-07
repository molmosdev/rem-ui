import { Component, computed, input, model, output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'button[r-switch]',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
  animations: [
    trigger('thumbState', [
      state('unchecked', style({ transform: 'translateX(0)' })),
      state('checked', style({ transform: '{{checkedTransformX}}' }), {
        params: { checkedTransformX: 'translateX(1rem)' },
      }),
      transition('unchecked <=> checked', [animate('100ms ease-out')]),
    ]),
  ],
  host: {
    '(click)': 'toggle()',
    'attr.type': 'button',
    'attr.role': 'switch',
    'attr.value': 'on',
    class: 'rt-reset rt-SwitchRoot rt-r-size-1 rt-variant-surface',
    '[attr.aria-checked]': 'checked()',
    '[attr.data-state]': 'dataState()',
    '[attr.aria-pressed]': 'checked()',
    '[class]': 'size()',
  },
})
export class Switch {
  /**
   * Whether the switch is checked.
   */
  checked = model<boolean>(false);

  /**
   * Emits when the checked state
   */
  checkedChange = output<boolean>();

  /**
   * The data state of the switch.
   */
  dataState = computed(() => (this.checked() ? 'checked' : 'unchecked'));

  /**
   * The size of the switch.
   */
  size = input<'default' | 'large'>('default');

  /**
   * The transform value for the thumb animation.
   */
  checkedTransformX = computed(() =>
    this.size() === 'large' ? 'translateX(1.6rem)' : 'translateX(1rem)'
  );

  /**
   * Toggles the checked state of the switch.
   */
  toggle(): void {
    this.checked.set(!this.checked());
    this.checkedChange.emit(this.checked());
  }
}
