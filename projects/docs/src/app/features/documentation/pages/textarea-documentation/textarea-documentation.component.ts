import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../playground/components/code-block/code-block.component';
import { Label, Textarea } from '../../../../../../../lib/src/public-api';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-textarea-documentation',
  template: `<h1>Textarea</h1>
    <span>
      Textarea is a custom textarea component with additional features.
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
          <td><strong>placeholder</strong></td>
          <td><code>string</code></td>
          <td>The placeholder text for the textarea.</td>
        </tr>
        <tr>
          <td><strong>value</strong></td>
          <td><code>string | null</code></td>
          <td>The value of the textarea.</td>
        </tr>
        <tr>
          <td><strong>rows</strong></td>
          <td><code>number</code></td>
          <td>The number of rows for the textarea.</td>
        </tr>
        <tr>
          <td><strong>cols</strong></td>
          <td><code>number</code></td>
          <td>The number of columns for the textarea.</td>
        </tr>
        <tr>
          <td><strong>invalid</strong></td>
          <td><code>boolean</code></td>
          <td>Whether the textarea is invalid.</td>
        </tr>
        <tr>
          <td><strong>disabled</strong></td>
          <td><code>boolean</code></td>
          <td>Whether the textarea is disabled.</td>
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
          <td>Emitted when the value of the textarea changes.</td>
        </tr>
      </table>
    </div>

    <h2>Basic</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <textarea
        r-textarea
        placeholder="Enter text"
        [value]="basicValue"
        (valueChange)="onValueChange($event)"></textarea>
    </div>

    <h2>Angular Binding with ngModel</h2>
    <code-block [code]="ngModelUsage" />
    <div class="documentation-playground">
      <textarea
        r-textarea
        placeholder="Enter text"
        [(ngModel)]="ngModelValue"></textarea>
    </div>

    <h2>Angular Forms with formControlName</h2>
    <code-block [code]="formControlUsage" />
    <form [formGroup]="form">
      <div class="documentation-playground">
        <textarea
          r-textarea
          placeholder="Enter text"
          formControlName="textareaControl"></textarea>
      </div>
    </form>

    <h2>Disabled</h2>
    <code-block [code]="disabledUsage" />
    <div class="documentation-playground">
      <textarea
        r-textarea
        placeholder="Enter text"
        [disabled]="true"></textarea>
    </div>

    <h2>Invalid</h2>
    <code-block [code]="invalidUsage" />
    <div class="documentation-playground">
      <textarea r-textarea placeholder="Enter text" [invalid]="true"></textarea>
    </div>

    <h2>With Label</h2>
    <code-block [code]="withLabelUsage" />
    <div class="documentation-playground">
      <r-label>
        <label>Textarea Label</label>
        <textarea r-textarea [rows]="4" [cols]="50"></textarea>
      </r-label>
    </div> `,
  imports: [
    CodeBlockComponent,
    Textarea,
    FormsModule,
    ReactiveFormsModule,
    Label,
  ],
})
export default class TextareaDocumentationComponent {
  angularImport = `import { Textarea } from 'rem-ui/angular'`;
  webComponentsImport = `import { Textarea } from 'rem-ui/elements'`;
  basicUsage = `<textarea r-textarea placeholder="Enter text" [value]="basicValue" (valueChange)="onValueChange($event)"></textarea>`;
  ngModelUsage = `<textarea r-textarea placeholder="Enter text" [(ngModel)]="ngModelValue"></textarea>`;
  formControlUsage = `<form [formGroup]="form">
  <textarea r-textarea placeholder="Enter text" formControlName="textareaControl"></textarea>
</form>`;
  disabledUsage = `<textarea r-textarea placeholder="Enter text" [disabled]="true"></textarea>`;
  invalidUsage = `<textarea r-textarea placeholder="Enter text" [invalid]="true"></textarea>`;
  withLabelUsage = `<r-label>
  <label>Textarea Label</label>
  <textarea r-textarea rows="4" cols="50"></textarea>
</r-label>`;

  basicValue = '';
  ngModelValue = '';
  form = new FormGroup({
    textareaControl: new FormControl(''),
  });

  onValueChange(value: string | null) {
    console.log('Textarea value changed:', value);
  }
}
