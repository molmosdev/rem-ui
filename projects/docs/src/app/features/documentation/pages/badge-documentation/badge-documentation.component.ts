import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../playground/components/code-block/code-block.component';
import { Badge } from '../../../../../../../lib/src/core/components/badge/badge.component';

@Component({
  selector: 'app-badge-documentation',
  template: `<h1>Badge</h1>
    <span>
      Badge is a small component used to display additional information or
      status.
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
          <td>The variant of the badge.</td>
        </tr>
        <tr>
          <td><strong>size</strong></td>
          <td><code>'small' | 'default'</code></td>
          <td>The size of the badge.</td>
        </tr>
      </table>
    </div>

    <h2>Basic</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <span r-badge variant="primary" size="default">Primary Badge</span>
    </div>

    <h2>Variants</h2>
    <code-block [code]="variantsUsage" />
    <div class="documentation-playground">
      <span r-badge variant="primary">Primary</span>
      <span r-badge variant="secondary">Secondary</span>
      <span r-badge variant="ghost">Ghost</span>
      <span r-badge variant="outlined">Outlined</span>
    </div>

    <h2>Sizes</h2>
    <code-block [code]="sizesUsage" />
    <div class="documentation-playground">
      <span r-badge size="small">Small</span>
      <span r-badge size="default">Default</span>
    </div>`,
  imports: [CodeBlockComponent, Badge],
})
export default class BadgeDocumentationComponent {
  angularImport = `import { Badge } from 'rem-ui/angular'`;
  webComponentsImport = `import { Badge } from 'rem-ui/elements'`;
  basicUsage = `<span r-badge variant="primary" size="default">Primary Badge</span>`;
  variantsUsage = `<span r-badge variant="primary">Primary</span>
<span r-badge variant="secondary">Secondary</span>
<span r-badge variant="ghost">Ghost</span>
<span r-badge variant="outlined">Outlined</span>`;
  sizesUsage = `<span r-badge size="small">Small</span>
<span r-badge size="default">Default</span>`;
}
