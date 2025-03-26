import { Component, input } from '@angular/core';

@Component({
  selector: 'r-dropdown-title',
  templateUrl: './dropdown-title.component.html',
  styleUrl: './dropdown-title.component.css',
})
export class DropdownTitle {
  readonly text = input.required<string>();
}
