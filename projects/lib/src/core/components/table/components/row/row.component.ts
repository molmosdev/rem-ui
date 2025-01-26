import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'r-row',
  imports: [NgClass],
  templateUrl: './row.component.html',
})
export class Row {
  header = input<boolean>(false);
  subheader = input<boolean>(false);
  clickable = input<boolean>(false);
  highlighted = input<boolean>(false);
}
