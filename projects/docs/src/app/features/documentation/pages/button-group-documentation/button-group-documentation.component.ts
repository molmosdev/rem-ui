import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../playground/components/code-block/code-block.component';
import { Button } from '../../../../../../../lib/src/public-api';
import { ButtonGroup } from '../../../../../../../lib/src/core/components/button-group/button-group.component';

@Component({
  selector: 'app-button-group-documentation',
  template: `<h1>Button Group</h1>
    <span>
      Button Group is a container for grouping multiple buttons together.
    </span>
    <h2>Usage</h2>
    <code-block [code]="buttonGroupUsage" />
    <div class="documentation-playground">
      <r-button-group>
        <button r-button variant="outlined">Outlined</button>
        <button r-button variant="outlined">Outlined</button>
        <button r-button variant="outlined">Outlined</button>
      </r-button-group>
    </div>

    <h2>All Primary</h2>
    <code-block [code]="allPrimaryUsage" />
    <div class="documentation-playground">
      <r-button-group>
        <button r-button variant="primary">Primary</button>
        <button r-button variant="primary">Primary</button>
        <button r-button variant="primary">Primary</button>
      </r-button-group>
    </div>

    <h2>Mixed Variants</h2>
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

    <h2>Small</h2>
    <code-block [code]="outlinedSmallUsage" />
    <div class="documentation-playground">
      <r-button-group>
        <button r-button variant="outlined" size="small">Outlined</button>
        <button r-button variant="outlined" size="small">Outlined</button>
        <button r-button variant="outlined" size="small">Outlined</button>
      </r-button-group>
    </div>

    <h2>Spaced Buttons</h2>
    <code-block [code]="spacedUsage" />
    <div class="documentation-playground">
      <r-button-group [spaced]="true">
        <button r-button variant="outlined">Outlined</button>
        <button r-button variant="outlined">Outlined</button>
        <button r-button variant="outlined">Outlined</button>
      </r-button-group>
    </div>

    <h2>Spaced and Small Buttons</h2>
    <code-block [code]="spacedSmallUsage" />
    <div class="documentation-playground">
      <r-button-group [spaced]="true">
        <button r-button variant="outlined" size="small">Outlined</button>
        <button r-button variant="outlined" size="small">Outlined</button>
        <button r-button variant="outlined" size="small">Outlined</button>
      </r-button-group>
    </div>`,
  imports: [CodeBlockComponent, Button, ButtonGroup],
})
export default class ButtonGroupDocumentationComponent {
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
