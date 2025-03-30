import { Component } from '@angular/core';
import {
  VerticalNav,
  VerticalNavGroup,
  VerticalNavItem,
  VerticalNavSection,
  Icon,
  Badge,
} from '../../../../../../../lib/src/public-api';
import { CodeBlockComponent } from '../../../playground/components/code-block/code-block.component';

@Component({
  selector: 'app-vertical-nav-documentation',
  template: `<h1>Vertical Navigation</h1>
    <span>
      Vertical Navigation is a component for creating hierarchical navigation
      menus.
    </span>
    <h2>Angular</h2>
    <code-block [code]="angularImport" />
    <h2>Web components</h2>
    <code-block [code]="webComponentsImport" />

    <h2>Properties</h2>
    <span>This section applies only to <strong>VerticalNavItem</strong>.</span>
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>active</strong></td>
          <td><code>boolean</code></td>
          <td>Indicates whether the navigation item is active.</td>
        </tr>
        <tr>
          <td><strong>disabled</strong></td>
          <td><code>boolean</code></td>
          <td>Indicates whether the navigation item is disabled.</td>
        </tr>
      </table>
    </div>

    <h2>Basic Example</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <r-vertical-nav style="width: 240px;">
        <r-vertical-nav-item>Item 1</r-vertical-nav-item>
        <r-vertical-nav-item>Item 2</r-vertical-nav-item>
      </r-vertical-nav>
    </div>

    <h2>With Groups</h2>
    <code-block [code]="groupsUsage" />
    <div class="documentation-playground">
      <r-vertical-nav style="width: 240px;">
        <r-vertical-nav-group>
          <div r-group-title>Group 1</div>
          <r-vertical-nav-item>Item 1.1</r-vertical-nav-item>
          <r-vertical-nav-item>Item 1.2</r-vertical-nav-item>
        </r-vertical-nav-group>
        <r-vertical-nav-group>
          <div r-group-title>Group 2</div>
          <r-vertical-nav-item>Item 2.1</r-vertical-nav-item>
        </r-vertical-nav-group>
      </r-vertical-nav>
    </div>

    <h2>With Sections</h2>
    <code-block [code]="sectionsUsage" />
    <div class="documentation-playground">
      <r-vertical-nav style="width: 240px;">
        <r-vertical-nav-section>
          <div r-section-title>Section 1</div>
          <r-vertical-nav-item>Item 1</r-vertical-nav-item>
        </r-vertical-nav-section>
        <r-vertical-nav-section>
          <div r-section-title>Section 2</div>
          <r-vertical-nav-item>Item 2</r-vertical-nav-item>
        </r-vertical-nav-section>
      </r-vertical-nav>
    </div>

    <h2>With Prefix and Suffix</h2>
    <code-block [code]="prefixSuffixUsage" />
    <div class="documentation-playground">
      <r-vertical-nav style="width: 240px;">
        <r-vertical-nav-item>
          Item 1
          <span r-badge variant="outlined" size="small" r-item-suffix>New</span>
        </r-vertical-nav-item>
        <r-vertical-nav-group>
          <i r-icon [size]="13" icon="Folder" r-group-prefix></i>
          <div r-group-title>Group 2</div>
          <span r-badge variant="outlined" size="small" r-group-suffix
            >New</span
          >
          <r-vertical-nav-item>
            <i r-icon [size]="13" icon="Gear" r-item-prefix></i>
            2.1
          </r-vertical-nav-item>
        </r-vertical-nav-group>
      </r-vertical-nav>
    </div>

    <h2>Infinite Nesting</h2>
    <code-block [code]="infiniteNestingUsage" />
    <div class="documentation-playground">
      <r-vertical-nav style="width: 240px;">
        <r-vertical-nav-group>
          <i r-icon [size]="13" icon="Folder" r-group-prefix></i>
          <div r-group-title>Group 1</div>
          <r-vertical-nav-item>Item 1.1</r-vertical-nav-item>
          <r-vertical-nav-group>
            <i r-icon [size]="13" icon="Folder" r-group-prefix></i>
            <div r-group-title>Nested Group 1.1</div>
            <r-vertical-nav-item>Item 1.1.1</r-vertical-nav-item>
            <r-vertical-nav-group>
              <i r-icon [size]="13" icon="Folder" r-group-prefix></i>
              <div r-group-title>Nested Group 1.1.1</div>
              <r-vertical-nav-item>Item 1.1.1.1</r-vertical-nav-item>
              <r-vertical-nav-item>Item 1.1.1.2</r-vertical-nav-item>
            </r-vertical-nav-group>
          </r-vertical-nav-group>
        </r-vertical-nav-group>
      </r-vertical-nav>
    </div>`,
  standalone: true,
  imports: [
    VerticalNav,
    VerticalNavGroup,
    VerticalNavItem,
    VerticalNavSection,
    Icon,
    CodeBlockComponent,
    Badge,
  ],
})
export default class VerticalNavDocumentationComponent {
  angularImport = `import { VerticalNav, VerticalNavGroup, VerticalNavItem, VerticalNavSection, Icon } from 'rem-ui/angular'`;
  webComponentsImport = `import { VerticalNav, VerticalNavGroup, VerticalNavItem, VerticalNavSection, Icon } from 'rem-ui/elements'`;

  basicUsage = `<r-vertical-nav>
  <r-vertical-nav-item>Item 1</r-vertical-nav-item>
  <r-vertical-nav-item>Item 2</r-vertical-nav-item>
</r-vertical-nav>`;

  groupsUsage = `<r-vertical-nav>
  <r-vertical-nav-group>
    <div r-group-title>Group 1</div>
    <r-vertical-nav-item>Item 1.1</r-vertical-nav-item>
    <r-vertical-nav-item>Item 1.2</r-vertical-nav-item>
  </r-vertical-nav-group>
  <r-vertical-nav-group>
    <div r-group-title>Group 2</div>
    <r-vertical-nav-item>Item 2.1</r-vertical-nav-item>
  </r-vertical-nav-group>
</r-vertical-nav>`;

  sectionsUsage = `<r-vertical-nav>
  <r-vertical-nav-section>
    <div r-section-title>Section 1</div>
    <r-vertical-nav-item>Item 1</r-vertical-nav-item>
  </r-vertical-nav-section>
  <r-vertical-nav-section>
    <div r-section-title>Section 2</div>
    <r-vertical-nav-item>Item 2</r-vertical-nav-item>
  </r-vertical-nav-section>
</r-vertical-nav>`;

  prefixSuffixUsage = `<r-vertical-nav>
  <r-vertical-nav-item>
    Item 1
    <span r-badge variant="outlined" size="small" r-item-suffix>New</span>
  </r-vertical-nav-item>
  <r-vertical-nav-group>
    <i r-icon [size]="13" icon="Folder" r-group-prefix></i>
    <div r-group-title>Group 2</div>
    <span r-badge variant="outlined" size="small" r-group-suffix>New</span>
    <r-vertical-nav-item>
      <i r-icon [size]="13" icon="Gear" r-item-prefix></i>
      Item 2.1
    </r-vertical-nav-item>
  </r-vertical-nav-group>
</r-vertical-nav>`;

  infiniteNestingUsage = `<r-vertical-nav>
  <r-vertical-nav-group>
    <i r-icon [size]="13" icon="Folder" r-group-prefix></i>
    <div r-group-title>Group 1</div>
    <r-vertical-nav-item>Item 1.1</r-vertical-nav-item>
    <r-vertical-nav-group>
      <i r-icon [size]="13" icon="Folder" r-group-prefix></i>
      <div r-group-title>Nested Group 1.1</div>
      <r-vertical-nav-item>Item 1.1.1</r-vertical-nav-item>
      <r-vertical-nav-group>
        <i r-icon [size]="13" icon="Folder" r-group-prefix></i>
        <div r-group-title>Nested Group 1.1.1</div>
        <r-vertical-nav-item>Item 1.1.1.1</r-vertical-nav-item>
        <r-vertical-nav-item>Item 1.1.1.2</r-vertical-nav-item>
      </r-vertical-nav-group>
    </r-vertical-nav-group>
  </r-vertical-nav-group>
</r-vertical-nav>`;
}
