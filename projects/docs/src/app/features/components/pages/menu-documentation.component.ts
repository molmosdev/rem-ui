import { Component } from '@angular/core';
import { Menu } from '../../../../../../lib/src/core/components/menu/menu.component';
import { MenuItemComponent } from '../../../../../../lib/src/core/components/menu/shared/components/menu-item/menu-item.component';
import { MenuGroupComponent } from '../../../../../../lib/src/core/components/menu/shared/components/menu-group/menu-group.component';
import { MenuLabel } from '../../../../../../lib/src/core/components/menu/shared/components/menu-label/menu-label.component';
import { MenuTrigger } from '../../../../../../lib/src/core/components/menu/shared/directives/menu-trigger.directive';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { Icon, Button } from '../../../../../../lib/src/public-api';

@Component({
  selector: 'article[app-menu-documentation]',
  template: `<h1>Menu</h1>
    <span>
      The Menu component provides a flexible and accessible way to create
      dropdown menus with support for nested menus and various configurations.
    </span>
    <h2>Angular</h2>
    <code-block [code]="angularImport" />

    <h2>Properties</h2>
    <span>This section applies to the <strong>Menu</strong> component.</span>
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>floating</strong></td>
          <td><code>boolean</code></td>
          <td>Determines if the menu should float above other content.</td>
        </tr>
      </table>
    </div>

    <span
      >This section applies to the <strong>Menu Item</strong> component.</span
    >
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>disabled</strong></td>
          <td><code>boolean</code></td>
          <td>Disables the menu item, making it unselectable.</td>
        </tr>
        <tr>
          <td><strong>typeaheadLabel</strong></td>
          <td><code>string</code></td>
          <td>Specifies a label for typeahead navigation within the menu.</td>
        </tr>
      </table>
    </div>

    <h2>Events</h2>
    <span
      >This section lists the events emitted by the
      <strong>Menu Item</strong> component.</span
    >
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Event</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>triggered</strong></td>
          <td><code>Event</code></td>
          <td>Emitted when a menu item is triggered.</td>
        </tr>
      </table>
    </div>

    <h2>Basic Example</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <r-menu>
        <r-menu-label>Basic Menu</r-menu-label>
        <r-menu-item>Item 1</r-menu-item>
        <r-menu-item>Item 2</r-menu-item>
        <r-menu-item>Item 3</r-menu-item>
      </r-menu>
    </div>

    <h2>With Nested Menus</h2>
    <code-block [code]="nestedUsage" />
    <div class="documentation-playground">
      <r-menu>
        <r-menu-label>Main Menu</r-menu-label>
        <r-menu-item>Item 1</r-menu-item>
        <r-menu-item [menuTriggerFor]="subMenu" [submenu]="true">
          <div
            style="display: flex; justify-content: space-between; width: 100%">
            Item 2
            <i r-icon icon="ChevronRight" [size]="16"></i>
          </div>
        </r-menu-item>
        <ng-template #subMenu>
          <r-menu [floating]="true">
            <r-menu-label>Submenu</r-menu-label>
            <r-menu-group>
              <r-menu-item>Subitem 1</r-menu-item>
              <r-menu-item>Subitem 2</r-menu-item>
            </r-menu-group>
            <r-menu-group>
              <r-menu-item>Subitem 3</r-menu-item>
              <r-menu-item>Subitem 4</r-menu-item>
            </r-menu-group>
          </r-menu>
        </ng-template>
      </r-menu>
    </div>

    <h2>With r-button Trigger</h2>
    <code-block [code]="buttonTriggerUsage" />
    <div class="documentation-playground">
      <button
        r-button
        variant="outlined"
        [menuTriggerFor]="menu"
        [menuTriggerPosition]="'bottom-left'">
        Open Menu
      </button>
      <ng-template #menu>
        <r-menu [floating]="true">
          <r-menu-label>Menu</r-menu-label>
          <r-menu-item>Item 1</r-menu-item>
          <r-menu-item>Item 2</r-menu-item>
          <r-menu-item [menuTriggerFor]="subMenu" [submenu]="true">
            <div
              style="display: flex; justify-content: space-between; width: 100%">
              Item 3
              <i r-icon icon="ChevronRight" [size]="16"></i>
            </div>
          </r-menu-item>
          <ng-template #subMenu>
            <r-menu [floating]="true">
              <r-menu-label>Submenu</r-menu-label>
              <r-menu-group>
                <r-menu-item>Subitem 1</r-menu-item>
                <r-menu-item>Subitem 2</r-menu-item>
              </r-menu-group>
            </r-menu>
          </ng-template>
        </r-menu>
      </ng-template>
    </div>

    <h2>With Different Trigger Positions</h2>
    <code-block [code]="triggerPositionExamples" />
    <div class="documentation-playground">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <button
          r-button
          variant="outlined"
          [menuTriggerFor]="menuTopLeft"
          [menuTriggerPosition]="'top-left'">
          Top Left
        </button>
        <ng-template #menuTopLeft>
          <r-menu [floating]="true">
            <r-menu-label>Top Left Menu</r-menu-label>
            <r-menu-item>Item 1</r-menu-item>
            <r-menu-item>Item 2</r-menu-item>
          </r-menu>
        </ng-template>

        <button
          r-button
          variant="outlined"
          [menuTriggerFor]="menuBottomCenter"
          [menuTriggerPosition]="'bottom-center'">
          Bottom Center
        </button>
        <ng-template #menuBottomCenter>
          <r-menu [floating]="true">
            <r-menu-label>Bottom Center Menu</r-menu-label>
            <r-menu-item>Item 1</r-menu-item>
            <r-menu-item>Item 2</r-menu-item>
          </r-menu>
        </ng-template>

        <button
          r-button
          variant="outlined"
          [menuTriggerFor]="menuRightTop"
          [menuTriggerPosition]="'right-top'">
          Right Top
        </button>
        <ng-template #menuRightTop>
          <r-menu [floating]="true">
            <r-menu-label>Right Top Menu</r-menu-label>
            <r-menu-group>
              <r-menu-item>Item 1</r-menu-item>
              <r-menu-item>Item 2</r-menu-item>
            </r-menu-group>
          </r-menu>
        </ng-template>

        <button
          r-button
          variant="outlined"
          [menuTriggerFor]="menuLeftCenter"
          [menuTriggerPosition]="'left-center'">
          Left Center
        </button>
        <ng-template #menuLeftCenter>
          <r-menu [floating]="true">
            <r-menu-label>Left Center Menu</r-menu-label>
            <r-menu-item>Item 1</r-menu-item>
            <r-menu-item>Item 2</r-menu-item>
          </r-menu>
        </ng-template>
      </div>
    </div>`,
  standalone: true,
  imports: [
    Menu,
    MenuItemComponent,
    MenuGroupComponent,
    MenuLabel,
    MenuTrigger,
    CodeBlockComponent,
    Icon,
    Button,
  ],
})
export default class MenuDocumentationComponent {
  angularImport = `import { Menu, MenuItemComponent, MenuGroupComponent, MenuTrigger } from 'rem-ui/angular';`;

  basicUsage = `<r-menu>
  <r-menu-label>Basic Menu</r-menu-label>
  <r-menu-item>Item 1</r-menu-item>
  <r-menu-item>Item 2</r-menu-item>
  <r-menu-item>Item 3</r-menu-item>
</r-menu>`;

  nestedUsage = `<r-menu>
  <r-menu-label>Main Menu</r-menu-label>
  <r-menu-item>Item 1</r-menu-item>
  <r-menu-item [menuTriggerFor]="subMenu" [submenu]="true">
    <div style="display: flex; justify-content: space-between; width: 100%">
      Item 2
      <i r-icon icon="ChevronRight" [size]="16"></i>
    </div>
  </r-menu-item>
  <ng-template #subMenu>
    <r-menu [floating]="true">
      <r-menu-label>Submenu</r-menu-label>
      <r-menu-group>
        <r-menu-item>Subitem 1</r-menu-item>
        <r-menu-item>Subitem 2</r-menu-item>
      </r-menu-group>
      <r-menu-group>
        <r-menu-item>Subitem 3</r-menu-item>
        <r-menu-item>Subitem 4</r-menu-item>
      </r-menu-group>
    </r-menu>
  </ng-template>
</r-menu>`;

  buttonTriggerUsage = `<button
  r-button
  variant="outlined"
  [menuTriggerFor]="menu"
  [menuTriggerPosition]="'bottom-left'">
  Open Menu
</button>
<ng-template #menu>
  <r-menu [floating]="true">
    <r-menu-label>Menu</r-menu-label>
    <r-menu-item>Item 1</r-menu-item>
    <r-menu-item>Item 2</r-menu-item>
    <r-menu-item [menuTriggerFor]="subMenu" [submenu]="true">
      <div style="display: flex; justify-content: space-between; width: 100%">
        Item 3
        <i r-icon icon="ChevronRight" [size]="16"></i>
      </div>
    </r-menu-item>
    <ng-template #subMenu>
      <r-menu [floating]="true">
        <r-menu-label>Submenu</r-menu-label>
        <r-menu-group>
          <r-menu-item>Subitem 1</r-menu-item>
          <r-menu-item>Subitem 2</r-menu-item>
        </r-menu-group>
      </r-menu>
    </ng-template>
  </r-menu>
</ng-template>`;

  triggerPositionExamples = `<button
  r-button
  variant="outlined"
  [menuTriggerFor]="menuTopLeft"
  [menuTriggerPosition]="'top-left'">
  Top Left
</button>
<ng-template #menuTopLeft>
  <r-menu [floating]="true">
    <r-menu-label>Top Left Menu</r-menu-label>
    <r-menu-item>Item 1</r-menu-item>
    <r-menu-item>Item 2</r-menu-item>
  </r-menu>
</ng-template>

<button
  r-button
  variant="outlined"
  [menuTriggerFor]="menuBottomCenter"
  [menuTriggerPosition]="'bottom-center'">
  Bottom Center
</button>
<ng-template #menuBottomCenter>
  <r-menu [floating]="true">
    <r-menu-label>Bottom Center Menu</r-menu-label>
    <r-menu-item>Item 1</r-menu-item>
    <r-menu-item>Item 2</r-menu-item>
  </r-menu>
</ng-template>

<button
  r-button
  variant="outlined"
  [menuTriggerFor]="menuRightTop"
  [menuTriggerPosition]="'right-top'">
  Right Top
</button>
<ng-template #menuRightTop>
  <r-menu [floating]="true">
    <r-menu-label>Right Top Menu</r-menu-label>
    <r-menu-group>
      <r-menu-item>Item 1</r-menu-item>
      <r-menu-item>Item 2</r-menu-item>
    </r-menu-group>
  </r-menu>
</ng-template>

<button
  r-button
  variant="outlined"
  [menuTriggerFor]="menuLeftCenter"
  [menuTriggerPosition]="'left-center'">
  Left Center
</button>
<ng-template #menuLeftCenter>
  <r-menu [floating]="true">
    <r-menu-label>Left Center Menu</r-menu-label>
    <r-menu-item>Item 1</r-menu-item>
    <r-menu-item>Item 2</r-menu-item>
  </r-menu>
</ng-template>`;
}
