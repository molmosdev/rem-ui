import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { Button, Icon } from '../../../../../../lib/src/public-api';
import { ButtonGroup } from '../../../../../../lib/src/core/components/button-group/button-group.component';

@Component({
  selector: 'app-button-documentation',
  template: `<h1>Button</h1>
    <span>
      Button is an extension to standard HTML button element with additional
      features.
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
          <td><strong>variant</strong></td>
          <td>
            <code>'primary' | 'secondary' | 'ghost' | 'outlined'</code>
          </td>
          <td>The variant of the button.</td>
        </tr>
        <tr>
          <td><strong>size</strong></td>
          <td><code>'small' | 'default'</code></td>
          <td>The size of the button.</td>
        </tr>
        <tr>
          <td><strong>loading</strong></td>
          <td><code>boolean</code></td>
          <td>Whether the button is in a loading state.</td>
        </tr>
        <tr>
          <td><strong>equalPadding</strong></td>
          <td><code>boolean</code></td>
          <td>
            Whether the padding should be equal vertically and horizontally.
          </td>
        </tr>
      </table>
    </div>

    <h2>Events</h2>
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Event</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>click</strong></td>
          <td>Emitted when the button is clicked.</td>
        </tr>
      </table>
    </div>

    <h2>Basic</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <button r-button variant="primary" size="default">
        This is a button
      </button>
    </div>

    <h2>Variants</h2>
    <code-block [code]="variantsUsage" />
    <div class="documentation-playground">
      <button r-button variant="primary">Primary</button>
      <button r-button variant="secondary">Secondary</button>
      <button r-button variant="ghost">Ghost</button>
      <button r-button variant="outlined">Outlined</button>
    </div>

    <h2>Sizes</h2>
    <code-block [code]="sizesUsage" />
    <div class="documentation-playground">
      <button r-button size="small">Small</button>
      <button r-button size="default">Default</button>
    </div>

    <h2>Loading State</h2>
    <code-block [code]="loadingUsage" />
    <div class="documentation-playground">
      <button r-button [loading]="true">Loading...</button>
    </div>

    <h2>Equal Padding</h2>
    <code-block [code]="equalPaddingUsage" />
    <div class="documentation-playground">
      <button r-button [equalPadding]="true">
        <i r-icon icon="House" [size]="16" color="var(--bg-color)"></i>
      </button>
    </div>

    <h2>Button Group</h2>
    <code-block [code]="buttonGroupUsage" />
    <div class="documentation-playground">
      <r-button-group>
        <button r-button variant="outlined">Outlined</button>
        <button r-button variant="outlined">Outlined</button>
        <button r-button variant="outlined">Outlined</button>
      </r-button-group>
    </div>

    <h3>All Primary</h3>
    <code-block [code]="allPrimaryUsage" />
    <div class="documentation-playground">
      <r-button-group>
        <button r-button variant="primary">Primary</button>
        <button r-button variant="primary">Primary</button>
        <button r-button variant="primary">Primary</button>
      </r-button-group>
    </div>

    <h3>Mixed Variants</h3>
    <code-block [code]="mixedVariantsUsage" />
    <div class="documentation-playground">
      <r-button-group>
        <button r-button variant="primary">Primary</button>
        <button r-button variant="secondary">Secondary</button>
      </r-button-group>
      <r-button-group>
        <button r-button variant="ghost">Ghost</button>
        <button r-button variant="outlined">Outlined</button>
      </r-button-group>
    </div>

    <h3>Small</h3>
    <code-block [code]="outlinedSmallUsage" />
    <div class="documentation-playground">
      <r-button-group>
        <button r-button variant="outlined" size="small">Outlined</button>
        <button r-button variant="outlined" size="small">Outlined</button>
        <button r-button variant="outlined" size="small">Outlined</button>
      </r-button-group>
    </div>

    <h3>Spaced Buttons</h3>
    <code-block [code]="spacedUsage" />
    <div class="documentation-playground">
      <r-button-group [spaced]="true">
        <button r-button variant="outlined">Outlined</button>
        <button r-button variant="outlined">Outlined</button>
        <button r-button variant="outlined">Outlined</button>
      </r-button-group>
    </div>

    <h3>Spaced and Small Buttons</h3>
    <code-block [code]="spacedSmallUsage" />
    <div class="documentation-playground">
      <r-button-group [spaced]="true">
        <button r-button variant="outlined" size="small">Outlined</button>
        <button r-button variant="outlined" size="small">Outlined</button>
        <button r-button variant="outlined" size="small">Outlined</button>
      </r-button-group>
    </div>`,
  imports: [CodeBlockComponent, Button, Icon, ButtonGroup],
})
export default class ButtonDocumentationComponent {
  angularImport = `import { Button } from 'rem-ui/angular'`;
  webComponentsImport = `import { Button } from 'rem-ui/elements'`;
  basicUsage = `<button r-button variant="primary" size="default">This is a button</button>`;
  variantsUsage = `<button r-button variant="primary">Primary</button>
<button r-button variant="secondary">Secondary</button>
<button r-button variant="ghost">Ghost</button>
<button r-button variant="outlined">Outlined</button>`;
  sizesUsage = `<button r-button size="small">Small</button>
<button r-button size="default">Default</button>`;
  loadingUsage = `<button r-button [loading]="true">Loading...</button>`;
  equalPaddingUsage = `<button r-button [equalPadding]="true">
  <i r-icon icon="House" [size]="16" color="var(--bg-color)"></i>
</button>`;
  buttonGroupUsage = `<r-button-group>
  <button r-button variant="outlined"> Outlined </button>
  <button r-button variant="outlined"> Outlined </button>
  <button r-button variant="outlined"> Outlined </button>
</r-button-group>`;

  allPrimaryUsage = `<r-button-group>
  <button r-button variant="primary"> Primary </button>
  <button r-button variant="primary"> Primary </button>
  <button r-button variant="primary"> Primary </button>
</r-button-group>`;

  mixedVariantsUsage = `<r-button-group>
  <button r-button variant="primary"> Primary </button>
  <button r-button variant="secondary"> Secondary </button>
</r-button-group>
<r-button-group>
  <button r-button variant="ghost"> Ghost </button>
  <button r-button variant="outlined"> Outlined </button>
</r-button-group>`;

  outlinedSmallUsage = `<r-button-group>
  <button r-button variant="outlined" size="small"> Outlined </button>
  <button r-button variant="outlined" size="small"> Outlined </button>
  <button r-button variant="outlined" size="small"> Outlined </button>
</r-button-group>`;

  spacedUsage = `<r-button-group [spaced]="true">
  <button r-button variant="outlined"> Outlined </button>
  <button r-button variant="outlined"> Outlined </button>
  <button r-button variant="outlined"> Outlined </button>
</r-button-group>`;

  spacedSmallUsage = `<r-button-group [spaced]="true">
  <button r-button variant="outlined" size="small"> Outlined </button>
  <button r-button variant="outlined" size="small"> Outlined </button>
  <button r-button variant="outlined" size="small"> Outlined </button>
</r-button-group>`;
}
