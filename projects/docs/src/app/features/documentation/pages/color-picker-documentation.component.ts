import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from '../../../../../../lib/src/core/components/color-picker/color-picker.component';

@Component({
  selector: 'app-color-picker-documentation',
  template: `
    <h1>Color Picker</h1>
    <span>
      The Color Picker is a custom input component that allows users to select a
      color.
    </span>

    <h2>Angular</h2>
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
          <td><strong>value</strong></td>
          <td><code>string</code></td>
          <td>The selected color value in hex format.</td>
        </tr>
        <tr>
          <td><strong>invalid</strong></td>
          <td><code>boolean</code></td>
          <td>Whether the input is invalid.</td>
        </tr>
        <tr>
          <td><strong>disabled</strong></td>
          <td><code>boolean</code></td>
          <td>Whether the input is disabled.</td>
        </tr>
      </table>
    </div>

    <h2>Events</h2>
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Event</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>colorChange</strong></td>
          <td><code>string</code></td>
          <td>Emitted when the selected color changes.</td>
        </tr>
      </table>
    </div>

    <h2>Basic Usage</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <input
        type="color"
        r-color-picker
        [(ngModel)]="selectedColor"
        maxWidth="240px" />
    </div>
  `,
  imports: [CodeBlockComponent, FormsModule, ColorPicker],
})
export default class ColorPickerDocumentationComponent {
  angularImport = `import { ColorPicker } from 'rem-ui/lib';`;
  basicUsage = `<input r-color-picker [value]="selectedColor" (colorChange)="onColorChange($event)" />`;
  selectedColor = '#ff0000';

  onColorChange(newColor: string): void {
    this.selectedColor = newColor;
  }
}
