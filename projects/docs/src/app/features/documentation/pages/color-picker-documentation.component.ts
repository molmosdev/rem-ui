import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';
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
          <td>
            The selected color value in hex format. Default is
            <code>#000000</code>.
          </td>
        </tr>
        <tr>
          <td><strong>maxWidth</strong></td>
          <td><code>string</code></td>
          <td>
            Specifies the maximum width of the input. Default is an empty
            string.
          </td>
        </tr>
        <tr>
          <td><strong>showColor</strong></td>
          <td><code>boolean</code></td>
          <td>
            Indicates whether to display the selected color value. Default is
            <code>true</code>.
          </td>
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
      <label
        r-color-picker
        for="color-picker-1"
        [maxWidth]="'240px'"
        [showColor]="true">
        <input
          #picker
          type="color"
          id="color-picker-1"
          [value]="selectedColor"
          (input)="onColorChange($event)" />
      </label>
    </div>

    <h2>Angular Binding with ngModel</h2>
    <code-block [code]="ngModelUsage" />
    <div class="documentation-playground">
      <label
        r-color-picker
        for="color-picker-2"
        [maxWidth]="'240px'"
        [showColor]="true">
        <input
          #picker
          type="color"
          id="color-picker-2"
          [(ngModel)]="ngModelColor" />
      </label>
    </div>

    <h2>Angular Forms with formControlName</h2>
    <code-block [code]="formControlUsage" />
    <form [formGroup]="form">
      <div class="documentation-playground">
        <label
          r-color-picker
          for="color-picker-3"
          [maxWidth]="'240px'"
          [showColor]="true">
          <input
            #picker
            type="color"
            id="color-picker-3"
            formControlName="colorControl" />
        </label>
      </div>
    </form>

    <h2>Without Show Color</h2>
    <code-block [code]="withoutShowColorUsage" />
    <div class="documentation-playground">
      <label
        r-color-picker
        for="color-picker-4"
        [maxWidth]="'240px'"
        [showColor]="false">
        <input
          #picker
          type="color"
          id="color-picker-4"
          [value]="selectedColor"
          (input)="onColorChange($event)" />
      </label>
    </div>
  `,
  imports: [CodeBlockComponent, FormsModule, ReactiveFormsModule, ColorPicker],
})
export default class ColorPickerDocumentationComponent {
  angularImport = `import { ColorPicker } from 'rem-ui/lib';`;
  basicUsage = `<label r-color-picker [maxWidth]="'240px'" [showColor]="true">
  <input #picker type="color" [value]="selectedColor" (input)="onColorChange($event)" />
</label>`;
  withoutShowColorUsage = `<label r-color-picker [maxWidth]="'240px'" [showColor]="false">
  <input #picker type="color" [value]="selectedColor" (input)="onColorChange($event)" />
</label>`;
  ngModelUsage = `<label r-color-picker [maxWidth]="'240px'" [showColor]="true">
  <input #picker type="color" [(ngModel)]="ngModelColor" />
</label>`;
  formControlUsage = `<form [formGroup]="form">
  <label r-color-picker [maxWidth]="'240px'" [showColor]="true">
    <input #picker type="color" formControlName="colorControl" />
  </label>
</form>`;

  selectedColor = '#ff0000';
  ngModelColor = '#00ff00';
  form = new FormGroup({
    colorControl: new FormControl('#0000ff'),
  });

  onColorChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.selectedColor = inputElement.value;
  }

  handle(event: string): void {
    console.log('Color changed:', event);
  }
}
