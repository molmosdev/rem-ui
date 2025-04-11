import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { InputGroup } from '../../../../../../lib/src/core/components/input-group/input-group.component';
import {
  Input,
  Icon,
  Select,
  Button,
  Label,
} from '../../../../../../lib/src/public-api';

@Component({
  selector: 'app-input-group-documentation',
  template: `<h1>Input Group</h1>
    <span>
      Input Group is a container for grouping inputs, icons, buttons, or selects
      together.
    </span>
    <h2>Angular</h2>
    <code-block [code]="angularImport" />
    <h2>Web Components</h2>
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
          <td><strong>bordered</strong></td>
          <td><code>boolean</code></td>
          <td>Whether the input group elements are separated by a border.</td>
        </tr>
        <tr>
          <td><strong>maxWidth</strong></td>
          <td><code>string</code></td>
          <td>Specifies the maximum width of the input group container.</td>
        </tr>
      </table>
    </div>

    <h2>With Input</h2>
    <code-block [code]="withInput" />
    <div class="documentation-playground">
      <r-input-group [bordered]="true" maxWidth="240px">
        <i r-icon icon="House" [size]="17"></i>
        <input type="number" r-input numberType="decimal" [value]="0" />
        <span>€</span>
      </r-input-group>
    </div>

    <h2>With Select</h2>
    <code-block [code]="withSelectUsage" />
    <div class="documentation-playground">
      <r-input-group [bordered]="true" maxWidth="240px">
        <span>Select</span>
        <select r-select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </r-input-group>
    </div>

    <h2>With Select and Button as Slot</h2>
    <code-block [code]="withButtonUsage" />
    <div class="documentation-playground">
      <r-input-group [bordered]="false" maxWidth="240px">
        <select r-select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <button r-button variant="secondary">
          <i r-icon icon="ArrowRight" [size]="15"></i>
        </button>
      </r-input-group>
    </div>

    <h2>Bordered False Example</h2>
    <code-block [code]="borderedFalseUsage" />
    <div class="documentation-playground">
      <r-input-group [bordered]="false" maxWidth="240px">
        <span>Name:</span>
        <input type="text" r-input placeholder="Enter your name..." />
      </r-input-group>
    </div>

    <h2>Complex Example</h2>
    <code-block [code]="complexUsage" />
    <div class="documentation-playground">
      <r-input-group [bordered]="true" maxWidth="240px">
        <i r-icon icon="Search" [size]="17"></i>
        <input type="text" r-input placeholder="Search here..." />
        <button r-button variant="primary">Go</button>
      </r-input-group>
    </div>

    <h2>With Label</h2>
    <code-block [code]="withLabelUsage" />
    <div class="documentation-playground">
      <r-input-group [bordered]="true" maxWidth="240px">
        <r-label>
          <label for="name">Name:</label>
          <input
            id="name"
            type="text"
            r-input
            placeholder="Enter your name..." />
        </r-label>
      </r-input-group>
    </div>

    <h2>With Label and Icon</h2>
    <code-block [code]="withLabelAndIconUsage" />
    <div class="documentation-playground">
      <r-input-group [bordered]="true" maxWidth="240px">
        <i r-icon icon="User" [size]="17"></i>
        <r-label>
          <label for="username">Username</label>
          <input id="username" type="text" r-input />
        </r-label>
      </r-input-group>
    </div>`,
  imports: [CodeBlockComponent, InputGroup, Input, Icon, Select, Button, Label],
})
export default class InputGroupDocumentationComponent {
  angularImport = `import { InputGroupComponent } from 'rem-ui/angular'`;
  webComponentsImport = `import { InputGroupComponent } from 'rem-ui/elements'`;

  withInput = `<r-input-group [bordered]="true" maxWidth="240px">
  <i r-icon icon="House" [size]="17"></i>
  <input type="number" r-input numberType="decimal" [value]="0" />
  <span>€</span>
</r-input-group>`;

  withSelectUsage = `<r-input-group [bordered]="true" maxWidth="240px">
  <span>Select</span>
  <select r-select>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</r-input-group>`;

  withButtonUsage = `<r-input-group [bordered]="false" maxWidth="240px">
  <select r-select>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  <button r-button variant="secondary">
    <i r-icon icon="ArrowRight" [size]="15"></i>
  </button>
</r-input-group>`;

  borderedFalseUsage = `<r-input-group [bordered]="false" maxWidth="240px">
  <span>Name:</span>
  <input type="text" r-input placeholder="Enter your name..." />
</r-input-group>`;

  complexUsage = `<r-input-group [bordered]="true" maxWidth="240px">
  <i r-icon icon="Search" [size]="17"></i>
  <input type="text" r-input placeholder="Search here..." />
  <button r-button variant="primary">Go</button>
</r-input-group>`;

  withLabelUsage = `<r-input-group [bordered]="true" maxWidth="240px">
  <r-label>
    <label for="name">Name:</label>
    <input id="name" type="text" r-input placeholder="Enter your name..." />
  </r-label>
</r-input-group>`;

  withLabelAndIconUsage = `<r-input-group [bordered]="true" maxWidth="240px">
  <i r-icon icon="User" [size]="17"></i>
  <r-label>
    <label for="username">Username</label>
    <input id="username" type="text" r-input />
  </r-label>
</r-input-group>`;
}
