import { Component, signal } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { BottomSheet } from '../../../../../../lib/src/core/components/bottom-sheet/bottom-sheet.component';
import { Button } from '../../../../../../lib/src/core/components/button/button.component';

@Component({
  selector: 'article[app-bottom-sheet-documentation]',
  template: `<h1>Bottom Sheet</h1>
    <span>
      Bottom Sheet is a sliding panel that appears from the bottom of the
      screen.
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
          <td>Indicates whether the bottom sheet is open.</td>
        </tr>
        <tr>
          <td><strong>height</strong></td>
          <td><code>string</code></td>
          <td>The height of the bottom sheet.</td>
        </tr>
        <tr>
          <td><strong>closeThreshold</strong></td>
          <td><code>number</code></td>
          <td>The threshold for closing the bottom sheet, in percentage.</td>
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
          <td>Emitted when the bottom sheet is closed.</td>
        </tr>
      </table>
    </div>

    <h2>Basic Usage</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <button r-button (click)="openBottomSheet('50dvh', 50)">
        Open Bottom Sheet
      </button>
    </div>

    <h2>Angular Binding with ngModel</h2>
    <code-block [code]="ngModelUsage" />
    <div class="documentation-playground">
      <button r-button (click)="openBottomSheet('50dvh', 50)">
        Open Bottom Sheet
      </button>
    </div>

    <h2>Angular Signals</h2>
    <code-block [code]="signalsUsage" />
    <div class="documentation-playground">
      <button r-button (click)="openBottomSheet('50dvh', 50)">
        Open Bottom Sheet
      </button>
    </div>

    <h2>Custom Height</h2>
    <code-block [code]="customHeightUsage" />
    <div class="documentation-playground">
      <button r-button (click)="openBottomSheet('70dvh', 50)">
        Open Bottom Sheet
      </button>
    </div>

    <h2>Custom Close Threshold</h2>
    <code-block [code]="customCloseThresholdUsage" />
    <div class="documentation-playground">
      <button r-button (click)="openBottomSheet('50dvh', 70)">
        Open Bottom Sheet
      </button>
    </div>

    <r-bottom-sheet
      [(isOpen)]="isOpen"
      [height]="height()"
      [closeThreshold]="closeThreshold()">
      <div
        style="display: flex; justify-content: center; align-items: center; height: 100%;">
        This is the content of the bottom sheet.
      </div>
    </r-bottom-sheet>`,
  imports: [CodeBlockComponent, BottomSheet, Button],
})
export default class BottomSheetDocumentationComponent {
  angularImport = `import { BottomSheet } from 'rem-ui/angular'`;
  basicUsage = `<button r-button (click)="openSheet()">Open Bottom Sheet</button>
<r-bottom-sheet
  [isOpen]="isOpen"
  [height]="'50dvh'"
  (closeSheet)="closeSheet()"
>
  <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
    This is the content of the bottom sheet.
  </div>
</r-bottom-sheet>`;

  customHeightUsage = `<button r-button (click)="isOpen = true">Open Bottom Sheet</button>
<r-bottom-sheet
  [(isOpen)]="isOpen"
  [height]="'70dvh'">
  <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
    This is a taller bottom sheet.
  </div>
</r-bottom-sheet>`;

  customCloseThresholdUsage = `<button r-button (click)="isOpen = true">Open Bottom Sheet</button>
<r-bottom-sheet
  [(isOpen)]="isOpen"
  [closeThreshold]="70">
  <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
    This bottom sheet requires dragging down 70% to close.
  </div>
</r-bottom-sheet>`;

  ngModelUsage = `<button r-button (click)="ngModelOpen = true">Open Bottom Sheet</button>
<r-bottom-sheet
  [(isOpen)]="ngModelOpen"
  [height]="'50dvh'"
  (closeSheet)="ngModelOpen = false">
  <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
    This is the content of the bottom sheet.
  </div>
</r-bottom-sheet>`;

  signalsUsage = `<button r-button (click)="signalOpen.set(true)">Open Bottom Sheet</button>
<r-bottom-sheet
  [(isOpen)]="signalOpen"
  [height]="'50dvh'"
  (closeSheet)="signalOpen.set(false)">
  <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
    This is the content of the bottom sheet.
  </div>
</r-bottom-sheet>`;

  readonly isOpen = signal<boolean>(false);
  readonly height = signal<string>('50dvh');
  readonly closeThreshold = signal<number>(50);

  openBottomSheet(height: string, closeThreshold: number) {
    this.height.set(height);
    this.closeThreshold.set(closeThreshold);
    this.isOpen.set(true);
  }
}
