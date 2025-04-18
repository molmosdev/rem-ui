import { CdkMenuItemRadio } from '@angular/cdk/menu';
import { Component } from '@angular/core';

/**
 * Represents a radio menu item.
 */
@Component({
  selector: 'r-menu-item-radio',
  imports: [],
  template: `<ng-content />`,
  styleUrl: './menu-item-radio.component.css',
  hostDirectives: [
    {
      directive: CdkMenuItemRadio,
      inputs: [
        'cdkMenuItemDisabled: disabled',
        'cdkMenuitemTypeaheadLabel: typeaheadLabel',
        'cdkMenuItemChecked: active',
      ],
      outputs: ['cdkMenuItemTriggered: triggered'],
    },
  ],
})
export class MenuItemRadioComponent {}
