import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { Checkbox, Label } from '../../../../../../lib/src/public-api';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'article[app-checkbox-documentation]',
  template: `<h1>Checkbox</h1>
    <span>Checkbox is a custom toggle component.</span>

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
          <td><code>boolean</code></td>
          <td>The value of the checkbox.</td>
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
          <td><code>boolean</code></td>
          <td>Emitted when the value of the checkbox changes.</td>
        </tr>
      </table>
    </div>

    <h2>Basic</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <input
        type="checkbox"
        r-checkbox
        [value]="basicValue"
        (valueChange)="onValueChange($event)" />
    </div>

    <h2>Angular Binding with ngModel</h2>
    <code-block [code]="ngModelUsage" />
    <div class="documentation-playground">
      <input type="checkbox" r-checkbox [(ngModel)]="ngModelValue" />
    </div>

    <h2>Angular Forms with formControlName</h2>
    <code-block [code]="formControlUsage" />
    <form [formGroup]="form">
      <div class="documentation-playground">
        <input type="checkbox" r-checkbox formControlName="checkboxControl" />
      </div>
    </form>

    <h2>With Label</h2>
    <code-block [code]="withLabelUsage" />
    <div class="documentation-playground">
      <r-label>
        <input type="checkbox" r-checkbox id="checkbox-label" />
        <label for="checkbox-label">Checkbox Label</label>
      </r-label>
    </div>`,
  imports: [
    CodeBlockComponent,
    Checkbox,
    FormsModule,
    ReactiveFormsModule,
    Label,
  ],
})
export default class CheckboxDocumentationComponent {
  angularImport = `import { Checkbox } from 'rem-ui/angular'`;
  basicUsage = `<input type="checkbox" r-checkbox [value]="basicValue" (valueChange)="onValueChange($event)" />`;
  ngModelUsage = `<input type="checkbox" r-checkbox [(ngModel)]="ngModelValue" />`;
  formControlUsage = `<input type="checkbox" r-checkbox formControlName="checkboxControl" />`;
  withLabelUsage = `<r-label>
  <input type="checkbox" r-checkbox id="checkbox-label" />
  <label for="checkbox-label">Checkbox Label</label>
</r-label>`;

  basicValue = false;
  ngModelValue = false;
  form = new FormGroup({
    checkboxControl: new FormControl(false),
  });

  onValueChange(value: boolean) {
    console.log('Checkbox value changed:', value);
  }
}
