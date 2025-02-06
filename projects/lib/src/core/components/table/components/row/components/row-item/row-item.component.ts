import { Component, computed, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'r-row-item',
  imports: [NgStyle],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css',
})
export class RowItem {
  widthPx = input<number>();
  alignedLeft = input<boolean>(false);
  isHeader = input<boolean>(false);
  style = computed(() => {
    return {
      width: `${this.widthPx()}px`,
      justifyContent: this.alignedLeft() ? 'flex-start' : 'center',
    };
  });
}
