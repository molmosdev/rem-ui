import { CdkMenuGroup } from '@angular/cdk/menu';
import { Component } from '@angular/core';

/**
 * Represents a group of menu items.
 */
@Component({
  selector: 'r-menu-group',
  imports: [],
  template: `<ng-content />`,
  styleUrl: './menu-group.component.css',
  hostDirectives: [CdkMenuGroup],
})
export class MenuGroupComponent {}
