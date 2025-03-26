import { Component, input } from '@angular/core';

@Component({
  selector: 'r-button-group',
  template: '<ng-content />',
  styleUrls: ['./button-group.component.css'],
  host: {
    class: 'button-group',
    '[class.spaced]': 'spaced()',
  },
})
export class ButtonGroup {
  /**
   * Whether the buttons should be spaced.
   */
  readonly spaced = input<boolean>(false);
}
