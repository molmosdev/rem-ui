import { Component, signal } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { SideSheet } from '../../../../../../lib/src/core/components/side-sheet/side-sheet.component';
import { Button } from '../../../../../../lib/src/core/components/button/button.component';

@Component({
  selector: 'article[app-side-sheet-documentation]',
  template: `<h1>Side Sheet</h1>
    <span>
      Side Sheet is a sliding panel that appears from the left or right side of
      the screen.
    </span>

    <code-block [code]="angularImport" />

    <h2>Properties</h2>
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>isOpen</strong></td>
          <td><code>boolean</code></td>
          <td>Indicates whether the side sheet is open.</td>
        </tr>
        <tr>
          <td><strong>side</strong></td>
          <td><code>'left' | 'right'</code></td>
          <td>
            Specifies the side of the screen where the sheet is positioned.
          </td>
        </tr>
        <tr>
          <td><strong>width</strong></td>
          <td><code>string</code></td>
          <td>The width of the side sheet.</td>
        </tr>
      </table>
    </div>

    <h2>Events</h2>
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Event</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>closeSheet</strong></td>
          <td>Emitted when the side sheet is closed.</td>
        </tr>
      </table>
    </div>

    <h2>Basic Usage</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <button r-button (click)="openLeftSideSheet()">
        Open Left Side Sheet
      </button>
      <button r-button (click)="openRightSideSheet()">
        Open Right Side Sheet
      </button>
    </div>

    <r-side-sheet
      [(isOpen)]="isLeftOpen"
      [width]="'300px'"
      [side]="'left'"
      (closeSheet)="isLeftOpen.set(false)">
      <div
        style="display: flex; justify-content: center; align-items: center; height: 100%;">
        This is the left side sheet.
      </div>
    </r-side-sheet>

    <r-side-sheet
      [(isOpen)]="isRightOpen"
      [width]="'300px'"
      [side]="'right'"
      (closeSheet)="isRightOpen.set(false)">
      <div
        style="display: flex; justify-content: center; align-items: center; height: 100%;">
        This is the right side sheet.
      </div>
    </r-side-sheet>

    <h2>Custom Width</h2>
    <code-block [code]="customWidthUsage" />
    <div class="documentation-playground">
      <button r-button (click)="openCustomWidthSideSheet()">
        Open Custom Width Side Sheet
      </button>
    </div>

    <r-side-sheet
      [(isOpen)]="isCustomWidthOpen"
      [width]="'500px'"
      [side]="'right'"
      (closeSheet)="isCustomWidthOpen.set(false)">
      <div
        style="display: flex; justify-content: center; align-items: center; height: 100%;">
        This is a custom width side sheet.
      </div>
    </r-side-sheet>`,
  imports: [CodeBlockComponent, SideSheet, Button],
})
export default class SideSheetDocumentationComponent {
  angularImport = `import { SideSheet } from 'rem-ui/angular'`;
  basicUsage = `<button r-button (click)="openLeftSideSheet()">Open Left Side Sheet</button>
<button r-button (click)="openRightSideSheet()">Open Right Side Sheet</button>

<r-side-sheet
  [(isOpen)]="isLeftOpen"
  [width]="'300px'"
  [side]="'left'">
  <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
    This is the left side sheet.
  </div>
</r-side-sheet>

<r-side-sheet
  [(isOpen)]="isRightOpen"
  [width]="'300px'"
  [side]="'right'">
  <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
    This is the right side sheet.
  </div>
</r-side-sheet>`;

  customWidthUsage = `<button r-button (click)="openCustomWidthSideSheet()">Open Custom Width Side Sheet</button>

<r-side-sheet
  [(isOpen)]="isCustomWidthOpen"
  [width]="'500px'"
  [side]="'right'">
  <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
    This is a custom width side sheet.
  </div>
</r-side-sheet>`;

  readonly isOpen = signal<boolean>(false);
  readonly width = signal<string>('300px');
  readonly side = signal<'left' | 'right'>('right');
  readonly isLeftOpen = signal<boolean>(false);
  readonly isRightOpen = signal<boolean>(false);
  readonly isCustomWidthOpen = signal<boolean>(false);

  openSideSheet(width: string, side: 'left' | 'right') {
    this.width.set(width);
    this.side.set(side);
    this.isOpen.set(true);
  }

  openLeftSideSheet() {
    this.isLeftOpen.set(true);
  }

  openRightSideSheet() {
    this.isRightOpen.set(true);
  }

  openCustomWidthSideSheet() {
    this.isCustomWidthOpen.set(true);
  }
}
