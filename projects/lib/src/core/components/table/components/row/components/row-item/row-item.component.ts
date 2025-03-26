import { Component, computed, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'r-row-item',
  imports: [NgStyle],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css',
})
export class RowItem {
  readonly widthPx = input<number>();
  readonly alignedLeft = input<boolean>(false);
  readonly isHeader = input<boolean>(false);
  readonly style = computed(() => {
    return {
      width: `${this.widthPx()}px`,
      justifyContent: this.alignedLeft() ? 'flex-start' : 'center',
    };
  });
}
