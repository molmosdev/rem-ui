import { Component, signal } from '@angular/core';
import { CodeBlockComponent } from '../../../playground/components/code-block/code-block.component';
import { BottomSheet } from '../../../../../../../lib/src/core/components/bottom-sheet/bottom-sheet.component';
import { Button } from '../../../../../../../lib/src/core/components/button/button.component';

@Component({
  selector: 'app-bottom-sheet-documentation',
  template: `<h1>Bottom Sheet</h1>
    <span>
      Bottom Sheet is a sliding panel that appears from the bottom of the
      screen.
    </span>
    <h2>Angular</h2>
    <code-block [code]="angularImport" />
    <h2>Web components</h2>
    <code-block [code]="webComponentsImport" />

    <h2>Basic Usage</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <button r-button (click)="isOpen.set(true)">Open Bottom Sheet</button>
    </div>

    <h2>Angular Binding with ngModel</h2>
    <code-block [code]="ngModelUsage" />
    <div class="documentation-playground">
      <button r-button (click)="isOpen.set(true)">Open Bottom Sheet</button>
    </div>

    <h2>Angular Signals</h2>
    <code-block [code]="signalsUsage" />
    <div class="documentation-playground">
      <button r-button (click)="isOpen.set(true)">Open Bottom Sheet</button>
    </div>

    <r-bottom-sheet [(isOpen)]="isOpen" [height]="'50dvh'">
      <div
        style="display: flex; justify-content: center; align-items: center; height: 100%;">
        This is the content of the bottom sheet.
      </div>
    </r-bottom-sheet>`,
  imports: [CodeBlockComponent, BottomSheet, Button],
})
export default class BottomSheetDocumentationComponent {
  angularImport = `import { BottomSheet } from 'rem-ui/angular'`;
  webComponentsImport = `import { BottomSheet } from 'rem-ui/elements'`;
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
}
