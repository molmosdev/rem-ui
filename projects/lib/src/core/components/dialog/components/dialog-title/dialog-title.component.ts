import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'r-dialog-title',
  imports: [NgStyle],
  templateUrl: './dialog-title.component.html',
  styleUrl: './dialog-title.component.css',
})
export class DialogTitle {
  readonly aligned = input<boolean>(false);
}
