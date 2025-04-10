import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { Select, Label } from '../../../../../../lib/src/public-api';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-select-documentation',
  template: `<h1>Select</h1>
    <span>
      Select is a custom dropdown component with additional features.
    </span>
    <h2>Angular</h2>
    <code-block [code]="angularImport" />
    <h2>Web components</h2>
    <code-block [code]="webComponentsImport" />

    <h2>Properties</h2>
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
          <td>Whether the select is disabled.</td>
        </tr>
        <tr>
          <td><strong>invalid</strong></td>
          <td><code>boolean</code></td>
          <td>Whether the select is invalid.</td>
        </tr>
        <tr>
          <td><strong>maxWidth</strong></td>
          <td><code>string</code></td>
          <td>The maximum width of the select.</td>
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
          <td><strong>valueChange</strong></td>
          <td><code>string | null</code></td>
          <td>Emitted when the value of the select changes.</td>
        </tr>
      </table>
    </div>

    <h2>Basic</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <select
        r-select
        [value]="basicValue"
        (valueChange)="onValueChange($event)"
        maxWidth="240px">
        <option [value]="null">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>

    <h2>Angular Binding with ngModel</h2>
    <code-block [code]="ngModelUsage" />
    <div class="documentation-playground">
      <select r-select [(ngModel)]="ngModelValue" maxWidth="240px">
        <option [value]="null">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>

    <h2>Angular Forms with formControlName</h2>
    <code-block [code]="formControlUsage" />
    <form [formGroup]="form">
      <div class="documentation-playground">
        <select r-select formControlName="selectControl" maxWidth="240px">
          <option [value]="null">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
    </form>

    <h2>Disabled</h2>
    <code-block [code]="disabledUsage" />
    <div class="documentation-playground">
      <select r-select [disabled]="true" maxWidth="240px">
        <option [value]="null">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>

    <h2>Invalid</h2>
    <code-block [code]="invalidUsage" />
    <div class="documentation-playground">
      <select r-select [invalid]="true" maxWidth="240px">
        <option [value]="null">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>

    <h2>With Label</h2>
    <code-block [code]="withSelectUsage" />
    <div class="documentation-playground">
      <r-label>
        <label>Select Label</label>
        <select r-select maxWidth="240px">
          <option [value]="null">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </r-label>
    </div>`,
  imports: [
    CodeBlockComponent,
    Select,
    FormsModule,
    ReactiveFormsModule,
    Label,
  ],
})
export default class SelectDocumentationComponent {
  angularImport = `import { Select } from 'rem-ui/angular'`;
  webComponentsImport = `import { Select } from 'rem-ui/elements'`;
  basicUsage = `<select r-select [value]="basicValue" (valueChange)="onValueChange($event)" maxWidth="240px">
  <option [value]="null">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>`;
  ngModelUsage = `<select r-select [(ngModel)]="ngModelValue" maxWidth="240px">
  <option [value]="null">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>`;
  formControlUsage = `<select r-select formControlName="selectControl" maxWidth="240px">
  <option [value]="null">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>`;
  disabledUsage = `<select r-select [disabled]="true" maxWidth="240px">
  <option [value]="null">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>`;
  invalidUsage = `<select r-select [invalid]="true" maxWidth="240px">
  <option [value]="null">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>`;

  options = [
    { value: null, text: 'Select an option' },
    { value: '1', text: 'Option 1' },
    { value: '2', text: 'Option 2' },
  ];

  basicValue = null;
  ngModelValue = null;
  form = new FormGroup({
    selectControl: new FormControl(null),
  });

  onValueChange(value: string | null) {
    console.log('Select value changed:', value);
  }

  withSelectUsage = `<r-label>
  <label>Select Label</label>
  <select r-select maxWidth="240px">
    <option [value]="null">Select an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</r-label>`;
}
