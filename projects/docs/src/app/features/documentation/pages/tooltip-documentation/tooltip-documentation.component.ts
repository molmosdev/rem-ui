import { Component } from '@angular/core';
import { TooltipComponent } from '../../../../../../../lib/src/core/components/tooltip/tooltip.component';
import { CodeBlockComponent } from '../../../playground/components/code-block/code-block.component';
import { Button } from '../../../../../../../lib/src/public-api';
import { Position } from '../../../../../../../lib/src/core/components/attached-box/types/position.type';

@Component({
  selector: 'app-tooltip-documentation',
  template: `
    <h1>Tooltip</h1>
    <span>
      Tooltip is a component for displaying additional information when hovering
      over an element.
    </span>
    <h2>Angular</h2>
    <code-block [code]="angularImport" />
    <h2>Web components</h2>
    <code-block [code]="webComponentsImport" />

    <h2>Basic Example</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <r-tooltip position="top-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Hover me to see the tooltip
        </button>
        <span r-tooltip-content>Tooltip content</span>
      </r-tooltip>
    </div>

    <h2>Variants</h2>
    <code-block [code]="variantsUsage" />
    <div class="documentation-playground">
      <r-tooltip variant="primary" position="top-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Primary Tooltip
        </button>
        <span r-tooltip-content>Primary Tooltip</span>
      </r-tooltip>
      <r-tooltip variant="secondary" position="top-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Secondary Tooltip
        </button>
        <span r-tooltip-content>Secondary Tooltip</span>
      </r-tooltip>
      <r-tooltip variant="ghost" position="top-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Ghost Tooltip
        </button>
        <span r-tooltip-content>Ghost Tooltip</span>
      </r-tooltip>
      <r-tooltip variant="outlined" position="top-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Outlined Tooltip
        </button>
        <span r-tooltip-content>Outlined Tooltip</span>
      </r-tooltip>
    </div>

    <h2>Sizes</h2>
    <code-block [code]="sizesUsage" />
    <div class="documentation-playground">
      <r-tooltip size="small" position="top-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Small Tooltip
        </button>
        <span r-tooltip-content>Small Tooltip</span>
      </r-tooltip>
      <r-tooltip size="default" position="top-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Default Tooltip
        </button>
        <span r-tooltip-content>Default Tooltip</span>
      </r-tooltip>
    </div>

    <h2>Positions</h2>
    <span>
      The position property allows you to control where the tooltip appears
      relative to the trigger element. It is composed of two parts: direction
      (e.g., top, bottom, left, right) and alignment (e.g., left, center,
      right). Below are examples of all possible combinations.</span
    >

    <h3>Top</h3>
    <code-block [code]="topPositionsUsage" />
    <div class="documentation-playground">
      <r-tooltip position="top-left">
        <button r-button variant="outlined" r-tooltip-trigger>Top Left</button>
        <span r-tooltip-content>Top Left Tooltip</span>
      </r-tooltip>
      <r-tooltip position="top-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Top Center
        </button>
        <span r-tooltip-content>Top Center Tooltip</span>
      </r-tooltip>
      <r-tooltip position="top-right">
        <button r-button variant="outlined" r-tooltip-trigger>Top Right</button>
        <span r-tooltip-content>Top Right Tooltip</span>
      </r-tooltip>
    </div>

    <h3>Bottom</h3>
    <code-block [code]="bottomPositionsUsage" />
    <div class="documentation-playground">
      <r-tooltip position="bottom-left">
        <button r-button variant="outlined" r-tooltip-trigger>
          Bottom Left
        </button>
        <span r-tooltip-content>Bottom Left Tooltip</span>
      </r-tooltip>
      <r-tooltip position="bottom-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Bottom Center
        </button>
        <span r-tooltip-content>Bottom Center Tooltip</span>
      </r-tooltip>
      <r-tooltip position="bottom-right">
        <button r-button variant="outlined" r-tooltip-trigger>
          Bottom Right
        </button>
        <span r-tooltip-content>Bottom Right Tooltip</span>
      </r-tooltip>
    </div>

    <h3>Left</h3>
    <code-block [code]="leftPositionsUsage" />
    <div class="documentation-playground">
      <r-tooltip position="left-top">
        <button r-button variant="outlined" r-tooltip-trigger>Left Top</button>
        <span r-tooltip-content>Left Top Tooltip</span>
      </r-tooltip>
      <r-tooltip position="left-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Left Center
        </button>
        <span r-tooltip-content>Left Center Tooltip</span>
      </r-tooltip>
      <r-tooltip position="left-bottom">
        <button r-button variant="outlined" r-tooltip-trigger>
          Left Bottom
        </button>
        <span r-tooltip-content>Left Bottom Tooltip</span>
      </r-tooltip>
    </div>

    <h3>Right</h3>
    <code-block [code]="rightPositionsUsage" />
    <div class="documentation-playground">
      <r-tooltip position="right-top">
        <button r-button variant="outlined" r-tooltip-trigger>Right Top</button>
        <span r-tooltip-content>Right Top Tooltip</span>
      </r-tooltip>
      <r-tooltip position="right-center">
        <button r-button variant="outlined" r-tooltip-trigger>
          Right Center
        </button>
        <span r-tooltip-content>Right Center Tooltip</span>
      </r-tooltip>
      <r-tooltip position="right-bottom">
        <button r-button variant="outlined" r-tooltip-trigger>
          Right Bottom
        </button>
        <span r-tooltip-content>Right Bottom Tooltip</span>
      </r-tooltip>
    </div>
  `,
  standalone: true,
  imports: [TooltipComponent, CodeBlockComponent, Button],
})
export default class TooltipDocumentationComponent {
  angularImport = `import { TooltipComponent } from 'rem-ui/angular'`;
  webComponentsImport = `import { TooltipComponent } from 'rem-ui/elements'`;

  basicUsage = `<r-tooltip position="top-center">
  <button r-button r-tooltip-trigger>Hover me</button>
  <span r-tooltip-content>Tooltip content</span>
</r-tooltip>`;

  variantsUsage = `<r-tooltip variant="primary" position="top-center">
  <button r-button r-tooltip-trigger>Primary Tooltip</button>
  <span r-tooltip-content>Primary Tooltip</span>
</r-tooltip>
<r-tooltip variant="secondary" position="top-center">
  <button r-button r-tooltip-trigger>Secondary Tooltip</button>
  <span r-tooltip-content>Secondary Tooltip</span>
</r-tooltip>
<r-tooltip variant="ghost" position="top-center">
  <button r-button r-tooltip-trigger>Ghost Tooltip</button>
  <span r-tooltip-content>Ghost Tooltip</span>
</r-tooltip>
<r-tooltip variant="outlined" position="top-center">
  <button r-button r-tooltip-trigger>Outlined Tooltip</button>
  <span r-tooltip-content>Outlined Tooltip</span>
</r-tooltip>`;

  sizesUsage = `<r-tooltip size="small" position="top-center">
  <button r-button r-tooltip-trigger>Small Tooltip</button>
  <span r-tooltip-content>Small Tooltip</span>
</r-tooltip>
<r-tooltip size="default" position="top-center">
  <button r-button r-tooltip-trigger>Default Tooltip</button>
  <span r-tooltip-content>Default Tooltip</span>
</r-tooltip>`;

  topPositionsUsage = `<r-tooltip position="top-left">
  <button r-button r-tooltip-trigger>Top Left</button>
  <span r-tooltip-content>Top Left Tooltip</span>
</r-tooltip>
<r-tooltip position="top-center">
  <button r-button r-tooltip-trigger>Top Center</button>
  <span r-tooltip-content>Top Center Tooltip</span>
</r-tooltip>
<r-tooltip position="top-right">
  <button r-button r-tooltip-trigger>Top Right</button>
  <span r-tooltip-content>Top Right Tooltip</span>
</r-tooltip>`;

  bottomPositionsUsage = `<r-tooltip position="bottom-left">
  <button r-button r-tooltip-trigger>Bottom Left</button>
  <span r-tooltip-content>Bottom Left Tooltip</span>
</r-tooltip>
<r-tooltip position="bottom-center">
  <button r-button r-tooltip-trigger>Bottom Center</button>
  <span r-tooltip-content>Bottom Center Tooltip</span>
</r-tooltip>
<r-tooltip position="bottom-right">
  <button r-button r-tooltip-trigger>Bottom Right</button>
  <span r-tooltip-content>Bottom Right Tooltip</span>
</r-tooltip>`;

  leftPositionsUsage = `<r-tooltip position="left-top">
  <button r-button r-tooltip-trigger>Left Top</button>
  <span r-tooltip-content>Left Top Tooltip</span>
</r-tooltip>
<r-tooltip position="left-center">
  <button r-button r-tooltip-trigger>Left Center</button>
  <span r-tooltip-content>Left Center Tooltip</span>
</r-tooltip>
<r-tooltip position="left-bottom">
  <button r-button r-tooltip-trigger>Left Bottom</button>
  <span r-tooltip-content>Left Bottom Tooltip</span>
</r-tooltip>`;

  rightPositionsUsage = `<r-tooltip position="right-top">
  <button r-button r-tooltip-trigger>Right Top</button>
  <span r-tooltip-content>Right Top Tooltip</span>
</r-tooltip>
<r-tooltip position="right-center">
  <button r-button r-tooltip-trigger>Right Center</button>
  <span r-tooltip-content>Right Center Tooltip</span>
</r-tooltip>
<r-tooltip position="right-bottom">
  <button r-button r-tooltip-trigger>Right Bottom</button>
  <span r-tooltip-content>Right Bottom Tooltip</span>
</r-tooltip>`;

  positions: Position[] = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'left-top',
    'left-center',
    'left-bottom',
    'right-top',
    'right-center',
    'right-bottom',
  ];
}
