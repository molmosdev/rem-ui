import { CdkMenu } from '@angular/cdk/menu';
import { Component, input } from '@angular/core';

/**
 * Represents a menu component that can optionally float.
 */
@Component({
  selector: 'r-menu',
  imports: [],
  template: `<ng-content />`,
  styleUrl: './menu.component.css',
  host: {
    '[class.floating]': 'floating()',
  },
  hostDirectives: [CdkMenu],
})
export class Menu {
  /**
   * Determines whether the menu is floating.
   * @default false
   */
  readonly floating = input(false);
}
