import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { Range } from '../../../../../../lib/src/core/components/range/range.component';
import { Alert } from '../../../../../../lib/src/core/components/alert/alert.component';

@Component({
  selector: 'article[app-range-documentation]',
  template: `<r-alert type="info" title="Components are in alpha" icon="Rocket">
      Try them out! We'd love to hear your feedback! Expect breaking changes!
    </r-alert>
    <h1>Range</h1>
    <span>Range is a custom slider component.</span>

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
          <td><strong>value</strong></td>
          <td><code>number</code></td>
          <td>The current value of the range.</td>
        </tr>
        <tr>
          <td><strong>min</strong></td>
          <td><code>string</code></td>
          <td>The minimum value of the range.</td>
        </tr>
        <tr>
          <td><strong>max</strong></td>
          <td><code>string</code></td>
          <td>The maximum value of the range.</td>
        </tr>
        <tr>
          <td><strong>step</strong></td>
          <td><code>string</code></td>
          <td>The step value of the range.</td>
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
          <td><code>number</code></td>
          <td>Emitted when the value of the range changes.</td>
        </tr>
      </table>
    </div>

    <h2>Basic</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <input
        type="range"
        r-range
        [value]="basicValue"
        [maxWidth]="'240px'"
        (valueChange)="onValueChange($event)" />
    </div>`,
  imports: [CodeBlockComponent, Range, Alert],
})
export default class RangeDocumentationComponent {
  angularImport = `import { Range } from 'rem-ui/angular'`;
  basicUsage = `<input type="range" r-range [value]="basicValue" (valueChange)="onValueChange($event)" />`;

  basicValue = '50';

  onValueChange(value: string) {
    console.log('Range value changed:', value);
  }
}
