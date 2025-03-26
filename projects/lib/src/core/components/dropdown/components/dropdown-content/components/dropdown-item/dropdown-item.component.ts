import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'r-dropdown-item',
  imports: [NgClass],
  templateUrl: './dropdown-item.component.html',
  styleUrl: './dropdown-item.component.css',
})
export class DropdownItem {
  readonly disabled = input<boolean>(false);
  readonly selected = input<boolean>(false);
}
