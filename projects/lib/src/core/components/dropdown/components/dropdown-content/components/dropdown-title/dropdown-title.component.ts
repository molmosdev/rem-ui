import { Component, input } from '@angular/core';

@Component({
  selector: 'r-dropdown-title',
  templateUrl: './dropdown-title.component.html',
})
export class DropdownTitle {
  text = input.required<string>();
}
