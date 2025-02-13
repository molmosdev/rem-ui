import { Component, input, output } from '@angular/core';
import { Button } from '../button/button.component';

@Component({
  selector: 'r-list',
  imports: [Button],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class List {
  /** Boolean to determine if the list is addable */
  addable = input<boolean>(true);
  /** Emits an event when the add button is clicked */
  addEmitter = output<void>();
}
