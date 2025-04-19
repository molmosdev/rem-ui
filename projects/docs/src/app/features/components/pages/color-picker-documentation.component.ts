import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ColorPicker } from '../../../../../../lib/src/core/components/color-picker/color-picker.component';
import { Alert } from '../../../../../../lib/src/core/components/alert/alert.component';

@Component({
  selector: 'article[app-color-picker-documentation]',
  template: `
    <r-alert type="info" title="Components are in alpha" icon="Rocket">
      Try them out! We'd love to hear your feedback! Expect breaking changes!
    </r-alert>
    <h1>Color Picker</h1>
    <span>
      The Color Picker is a custom input component that allows users to select a
      color.
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
      <input
        r-color-picker
        type="color"
        [maxWidth]="'240px'"
        [showColor]="true"
        [value]="selectedColor"
        (input)="onColorChange($event)" />
    </div>

    <h2>Angular Binding with ngModel</h2>
    <code-block [code]="ngModelUsage" />
    <div class="documentation-playground">
      <input
        r-color-picker
        type="color"
        [maxWidth]="'240px'"
        [showColor]="true"
        [(ngModel)]="ngModelColor" />
    </div>

    <h2>Angular Forms with formControlName</h2>
    <code-block [code]="formControlUsage" />
    <form [formGroup]="form">
      <div class="documentation-playground">
        <input
          r-color-picker
          type="color"
          [maxWidth]="'240px'"
          [showColor]="true"
          formControlName="colorControl" />
      </div>
    </form>

    <h2>Without Show Color</h2>
    <code-block [code]="withoutShowColorUsage" />
    <div class="documentation-playground">
      <input
        r-color-picker
        type="color"
        [maxWidth]="'240px'"
        [showColor]="false"
        [value]="selectedColor"
        (input)="onColorChange($event)" />
    </div>
  `,
  imports: [
    CodeBlockComponent,
    FormsModule,
    ReactiveFormsModule,
    ColorPicker,
    Alert,
  ],
})
export default class ColorPickerDocumentationComponent {
  angularImport = `import { ColorPicker2Component } from 'rem-ui/lib';`;
  basicUsage = `<input r-color-picker type="color" [maxWidth]="'240px'" [showColor]="true" [value]="selectedColor" (input)="onColorChange($event)" />`;
  withoutShowColorUsage = `<input r-color-picker type="color" [maxWidth]="'240px'" [showColor]="false" [value]="selectedColor" (input)="onColorChange($event)" />`;
  ngModelUsage = `<input r-color-picker type="color" [maxWidth]="'240px'" [showColor]="true" [(ngModel)]="ngModelColor" />`;
  formControlUsage = `<form [formGroup]="form">
  <input r-color-picker type="color" [maxWidth]="'240px'" [showColor]="true" formControlName="colorControl" />
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
