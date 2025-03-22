import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../playground/components/code-block/code-block.component';
import { Input } from '../../../../../../../lib/src/public-api';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-input-documentation',
  template: `<h1>Input</h1>
    <span> Input is a custom input component with additional features. </span>
    <h2>Angular</h2>
    <code-block [code]="angularImport"></code-block>
    <h2>Web components</h2>
    <code-block [code]="webComponentsImport"></code-block>

    <h2>Properties</h2>
    <table>
      <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><strong>type</strong></td>
        <td><code>'text' | 'number' | 'password' | 'email'</code></td>
        <td>The type of the input.</td>
      </tr>
      <tr>
        <td><strong>placeholder</strong></td>
        <td><code>string</code></td>
        <td>The placeholder text for the input.</td>
      </tr>
      <tr>
        <td><strong>value</strong></td>
        <td><code>string | number | null</code></td>
        <td>The value of the input.</td>
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
      <tr>
        <td><strong>maxWidth</strong></td>
        <td><code>string</code></td>
        <td>The maximum width of the input.</td>
      </tr>
      <tr>
        <td><strong>decimals</strong></td>
        <td><code>number</code></td>
        <td>The number of decimal places for number input.</td>
      </tr>
      <tr>
        <td><strong>numberType</strong></td>
        <td><code>'integer' | 'decimal'</code></td>
        <td>The type of number input (integer or decimal).</td>
      </tr>
    </table>

    <h2>Events</h2>
    <table>
      <tr>
        <th>Event</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><strong>valueChange</strong></td>
        <td><code>string | number | null</code></td>
        <td>Emitted when the value of the input changes.</td>
      </tr>
    </table>

    <h2>Basic</h2>
    <code-block [code]="basicUsage"></code-block>
    <input
      r-input
      type="text"
      placeholder="Enter text"
      [value]="basicValue"
      (valueChange)="onValueChange($event)"
      maxWidth="240px" />

    <h2>Angular Binding with ngModel</h2>
    <code-block [code]="ngModelUsage"></code-block>
    <input
      r-input
      type="text"
      placeholder="Enter text"
      [(ngModel)]="ngModelValue"
      maxWidth="240px" />

    <h2>Angular Forms with formControlName</h2>
    <code-block [code]="formControlUsage"></code-block>
    <form [formGroup]="form">
      <input
        r-input
        type="text"
        placeholder="Enter text"
        formControlName="inputControl"
        maxWidth="240px" />
    </form>

    <h2>Disabled</h2>
    <code-block [code]="disabledUsage"></code-block>
    <input
      r-input
      type="text"
      placeholder="Enter text"
      [disabled]="true"
      maxWidth="240px" />

    <h2>Invalid</h2>
    <code-block [code]="invalidUsage"></code-block>
    <input
      r-input
      type="text"
      placeholder="Enter text"
      [invalid]="true"
      maxWidth="240px" />

    <h2>Number Input with Decimals</h2>
    <code-block [code]="decimalsUsage"></code-block>
    <input
      r-input
      type="number"
      placeholder="Enter number"
      numberType="decimal"
      [decimals]="2"
      maxWidth="240px" />

    <h2>Number Input with Integer Type</h2>
    <code-block [code]="integerUsage"></code-block>
    <input
      r-input
      type="number"
      placeholder="Enter integer"
      numberType="integer"
      maxWidth="240px" />

    <h2>Password Input</h2>
    <code-block [code]="passwordUsage"></code-block>
    <input
      r-input
      type="password"
      placeholder="Enter password"
      maxWidth="240px" />`,
  imports: [CodeBlockComponent, Input, FormsModule, ReactiveFormsModule],
})
export default class InputDocumentationComponent {
  angularImport = `import { Input } from 'rem-ui/angular'`;
  webComponentsImport = `import { Input } from 'rem-ui/elements'`;
  basicUsage = `<input r-input type="text" placeholder="Enter text" [value]="basicValue" (valueChange)="onValueChange($event)" maxWidth="240px" />`;
  ngModelUsage = `<input r-input type="text" placeholder="Enter text" [(ngModel)]="ngModelValue" maxWidth="240px" />`;
  formControlUsage = `<form [formGroup]="form">
  <input r-input type="text" placeholder="Enter text" formControlName="inputControl" maxWidth="240px" />
</form>`;
  disabledUsage = `<input r-input type="text" placeholder="Enter text" [disabled]="true" maxWidth="240px" />`;
  invalidUsage = `<input r-input type="text" placeholder="Enter text" [invalid]="true" maxWidth="240px" />`;
  decimalsUsage = `<input r-input type="number" placeholder="Enter number" numberType="decimal" [decimals]="2" maxWidth="240px" />`;
  integerUsage = `<input r-input type="number" placeholder="Enter integer" numberType="integer" maxWidth="240px" />`;
  passwordUsage = `<input r-input type="password" placeholder="Enter password" maxWidth="240px" />`;

  basicValue = '';
  ngModelValue = '';
  form = new FormGroup({
    inputControl: new FormControl(''),
  });

  onValueChange(value: string | number | null) {
    console.log('Input value changed:', value);
  }
}
