import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'r-spinner',
  imports: [NgStyle],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
})
export class Spinner {
  active = input<boolean>(true);
  color = input<string>('var(--foreground)');
  backgroundColor = input<string>('transparent');
  size = input<number>(20);
}
