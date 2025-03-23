import { Component } from '@angular/core';

@Component({
  selector: 'r-button-group',
  template: `<ng-content />`,
  styleUrls: ['./button-group.component.css'],
  host: {
    class: 'button-group',
  },
})
export class ButtonGroup {}
