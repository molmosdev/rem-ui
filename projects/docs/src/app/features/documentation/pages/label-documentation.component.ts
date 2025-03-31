import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { Label, Input, Select } from '../../../../../../lib/src/public-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-label-documentation',
  template: `<h1>Label</h1>
    <span>
      Label is a custom label component that works with input and select
      elements.
    </span>
    <h2>Angular</h2>
    <code-block [code]="angularImport" />
    <h2>Web components</h2>
    <code-block [code]="webComponentsImport" />

    <h2>With Input</h2>
    <code-block [code]="withInputUsage" />
    <div class="documentation-playground">
      <r-label>
        <label>Input Label</label>
        <input r-input type="text" maxWidth="240px" />
      </r-label>
    </div>

    <h2>With Select</h2>
    <code-block [code]="withSelectUsage" />
    <div class="documentation-playground">
      <r-label>
        <label>Select Label</label>
        <select r-select [options]="options" maxWidth="240px"></select>
      </r-label>
    </div> `,
  imports: [CodeBlockComponent, Label, Input, Select, FormsModule],
})
export default class LabelDocumentationComponent {
  angularImport = `import { Label } from 'rem-ui/angular'`;
  webComponentsImport = `import { Label } from 'rem-ui/elements'`;
  withInputUsage = `<r-label>
  <label>Input Label</label>
  <input r-input type="text" maxWidth="240px" />
</r-label>`;
  withSelectUsage = `<r-label>
  <label>Select Label</label>
  <select r-select [options]="options" maxWidth="240px"></select>
</r-label>`;

  options = [
    { value: null, text: 'Select an option' },
    { value: '1', text: 'Option 1' },
    { value: '2', text: 'Option 2' },
  ];
}
