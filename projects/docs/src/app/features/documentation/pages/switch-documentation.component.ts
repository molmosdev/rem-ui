import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { Label, Switch } from '../../../../../../lib/src/public-api';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-switch-documentation',
  template: `<h1>Switch</h1>
    <span> Switch is a custom toggle component with additional features. </span>
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
          <td><strong>value</strong></td>
          <td><code>boolean</code></td>
          <td>The value of the switch.</td>
        </tr>
        <tr>
          <td><strong>size</strong></td>
          <td><code>'default' | 'large'</code></td>
          <td>The size of the switch.</td>
        </tr>
        <tr>
          <td><strong>disabled</strong></td>
          <td><code>boolean</code></td>
          <td>Whether the switch is disabled.</td>
        </tr>
        <tr>
          <td><strong>invalid</strong></td>
          <td><code>boolean</code></td>
          <td>Whether the switch is invalid.</td>
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
          <td>Emitted when the value of the switch changes.</td>
        </tr>
      </table>
    </div>

    <h2>Basic</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <input
        type="checkbox"
        r-switch
        [value]="basicValue"
        (valueChange)="onValueChange($event)" />
    </div>

    <h2>Angular Binding with ngModel</h2>
    <code-block [code]="ngModelUsage" />
    <div class="documentation-playground">
      <input type="checkbox" r-switch [(ngModel)]="ngModelValue" />
    </div>

    <h2>Angular Forms with formControlName</h2>
    <code-block [code]="formControlUsage" />
    <form [formGroup]="form">
      <div class="documentation-playground">
        <input type="checkbox" r-switch formControlName="switchControl" />
      </div>
    </form>

    <h2>With Label</h2>
    <code-block [code]="withLabelUsage" />
    <div class="documentation-playground">
      <r-label>
        <input type="checkbox" r-switch id="switch-label" />
        <label for="switch-label">Switch Label</label>
      </r-label>
    </div>`,
  imports: [
    CodeBlockComponent,
    Switch,
    FormsModule,
    ReactiveFormsModule,
    Label,
  ],
})
export default class SwitchDocumentationComponent {
  angularImport = `import { Switch } from 'rem-ui/angular'`;
  webComponentsImport = `import { Switch } from 'rem-ui/elements'`;
  basicUsage = `<input type="checkbox" r-switch [value]="basicValue" (valueChange)="onValueChange($event)" />`;
  ngModelUsage = `<input type="checkbox" r-switch [(ngModel)]="ngModelValue" />`;
  formControlUsage = `<input type="checkbox" r-switch formControlName="switchControl" />`;
  withLabelUsage = `<r-label>
  <input type="checkbox" r-switch id="switch-label" />
  <label for="switch-label">Switch Label</label>
</r-label>`;

  basicValue = false;
  ngModelValue = false;
  form = new FormGroup({
    switchControl: new FormControl(false),
  });

  onValueChange(value: boolean) {
    console.log('Switch value changed:', value);
  }
}
