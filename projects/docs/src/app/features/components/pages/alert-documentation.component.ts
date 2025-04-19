import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { Alert } from '../../../../../../lib/src/public-api';

@Component({
  selector: 'article[app-alert-documentation]',
  template: `<r-alert type="info" title="Components are in alpha" icon="Rocket">
      Try them out! We'd love to hear your feedback! Expect breaking changes!
    </r-alert>
    <h1>Alert</h1>
    <span>
      Alert is a component used to display important messages to the user.
    </span>

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
          <td><strong>type</strong></td>
          <td><code>'success' | 'error' | 'warning' | 'info'</code></td>
          <td>The type of the alert.</td>
        </tr>
        <tr>
          <td><strong>title</strong></td>
          <td><code>string | null</code></td>
          <td>The title of the alert.</td>
        </tr>
        <tr>
          <td><strong>icon</strong></td>
          <td><code>string | null</code></td>
          <td>The icon of the alert.</td>
        </tr>
        <tr>
          <td><strong>dismissible</strong></td>
          <td><code>boolean</code></td>
          <td>Whether the alert can be dismissed.</td>
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
          <td><strong>dismissed</strong></td>
          <td>Emitted when the alert is dismissed.</td>
        </tr>
      </table>
    </div>

    <h2>Basic</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <r-alert type="info" title="Info Alert" icon="Info">
        This is a basic informational alert.
      </r-alert>
    </div>

    <h2>Types</h2>
    <code-block [code]="typesUsage" />
    <div class="documentation-playground">
      <r-alert type="success" title="Success" icon="CircleCheck">
        This is a success alert.
      </r-alert>
      <r-alert type="error" title="Error" icon="CircleX">
        This is an error alert.
      </r-alert>
      <r-alert type="warning" title="Warning" icon="OctagonAlert">
        This is a warning alert.
      </r-alert>
      <r-alert type="info" title="Info" icon="Info">
        This is an informational alert.
      </r-alert>
    </div>

    <h2>Dismissible</h2>
    <code-block [code]="dismissibleUsage" />
    <div class="documentation-playground">
      <r-alert type="info" [dismissible]="true" title="Info" icon="Info">
        This alert can be dismissed.
      </r-alert>
    </div>

    <h2>Max Width</h2>
    <code-block [code]="maxWidthUsage" />
    <div class="documentation-playground">
      <r-alert type="info" title="Info Alert" icon="Info" [maxWidth]="'300px'">
        This alert has a maximum width of 300px.
      </r-alert>
    </div>`,
  imports: [CodeBlockComponent, Alert],
})
export default class AlertDocumentationComponent {
  angularImport = `import { Alert } from 'rem-ui/angular'`;

  basicUsage = `<r-alert type="info" title="Info Alert" icon="Info">
  This is a basic informational alert.
</r-alert>`;

  typesUsage = `<r-alert type="success" title="Success" icon="CircleCheck">
  This is a success alert.
</r-alert>
<r-alert type="error" title="Error" icon="CircleX">
  This is an error alert.
</r-alert>
<r-alert type="warning" title="Warning" icon="OctagonAlert">
  This is a warning alert.
</r-alert>
<r-alert type="info" title="Info" icon="Info">
  This is an informational alert.
</r-alert>`;

  dismissibleUsage = `<r-alert type="info" [dismissible]="true" title="Info" icon="Info">
  This alert can be dismissed.
</r-alert>`;

  slotsUsage = `<r-alert type="success">
  This is a success alert with slots for the main content.
</r-alert>`;

  maxWidthUsage = `<r-alert type="info" title="Info Alert" icon="Info" [maxWidth]="'300px'">
  This alert has a maximum width of 300px.
</r-alert>`;
}
