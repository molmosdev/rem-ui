import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../playground/components/code-block/code-block.component';
import { Button, Icon } from '../../../../../../../lib/src/public-api';

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
          <td><strong>radius</strong></td>
          <td><code>'none' | 'medium' | 'full'</code></td>
          <td>The radius of the button.</td>
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
    <button r-button variant="primary" size="default" radius="medium">
      This is a button
    </button>

    <h2>Variants</h2>
    <code-block [code]="variantsUsage" />
    <button r-button variant="primary">Primary</button>
    <button r-button variant="secondary">Secondary</button>
    <button r-button variant="ghost">Ghost</button>
    <button r-button variant="outlined">Outlined</button>

    <h2>Sizes</h2>
    <code-block [code]="sizesUsage" />
    <button r-button size="small">Small</button>
    <button r-button size="default">Default</button>

    <h2>Radius</h2>
    <code-block [code]="radiusUsage" />
    <button r-button radius="none">None</button>
    <button r-button radius="medium">Medium</button>
    <button r-button radius="full">Full</button>

    <h2>Loading State</h2>
    <code-block [code]="loadingUsage" />
    <button r-button [loading]="true">Loading...</button>

    <h2>Equal Padding</h2>
    <code-block [code]="equalPaddingUsage" />
    <button r-button [equalPadding]="true">
      <i r-icon icon="House" [size]="16" color="var(--bg-color)"></i>
    </button>`,
  imports: [CodeBlockComponent, Button, Icon],
})
export default class ButtonDocumentationComponent {
  angularImport = `import { Button } from 'rem-ui/angular'`;
  webComponentsImport = `import { Button } from 'rem-ui/elements'`;
  basicUsage = `<button r-button variant="primary" size="default" radius="medium">This is a button</button>`;
  variantsUsage = `<button r-button variant="primary">Primary</button>
<button r-button variant="secondary">Secondary</button>
<button r-button variant="ghost">Ghost</button>
<button r-button variant="outlined">Outlined</button>`;
  sizesUsage = `<button r-button size="small">Small</button>
<button r-button size="default">Default</button>`;
  radiusUsage = `<button r-button radius="none">None</button>
<button r-button radius="medium">Medium</button>
<button r-button radius="full">Full</button>`;
  loadingUsage = `<button r-button [loading]="true">Loading...</button>`;
  equalPaddingUsage = `<button r-button [equalPadding]="true">
  <i r-icon icon="House" [size]="16" color="var(--bg-color)"></i>
</button>`;
}
