import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'r-row',
  imports: [NgClass],
  templateUrl: './row.component.html',
  styleUrl: './row.component.css',
})
export class Row {
  readonly header = input<boolean>(false);
  readonly subheader = input<boolean>(false);
  readonly clickable = input<boolean>(false);
  readonly highlighted = input<boolean>(false);
}
