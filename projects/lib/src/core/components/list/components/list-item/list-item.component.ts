import {
  Component,
  computed,
  HostBinding,
  input,
  model,
  output,
} from '@angular/core';
import { Button, TextField } from '../../../../../public-api';

export interface ListItemContent {
  label: string | undefined;
  value: number | string | null;
  type: 'string' | 'number';
}

@Component({
  selector: 'r-list-item',
  imports: [TextField, Button],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItem {
  /** The unique identifier for the list item. */
  readonly id = input.required<string>();

  /** The content of the list item. */
  readonly content = model.required<ListItemContent[]>();

  /** Indicates whether the list item is removable. */
  readonly removable = input<boolean>(true);

  /** Event emitted when the list item is removed. */
  removeEmitter = output<string>();

  /** Event emitted when the content of the list item changes. */
  changeEmitter = output<{ id: string; content: ListItemContent }>();

  /** The position of the delete button. */
  readonly deleteButtonPosition = input<'bottom' | 'right'>('right');

  @HostBinding('class.bottom-delete')
  get isBottomDelete() {
    return this.deleteButtonPosition() === 'bottom';
  }

  /**
   * Checks if the content at the specified index is a string.
   * @param index The index of the content.
   * @returns A computed boolean indicating if the content is a string.
   */
  isString = (index: number) =>
    computed(() => typeof this.content()[index].value === 'string');

  /**
   * Checks if the content at the specified index is a number.
   * @param index The index of the content.
   * @returns A computed boolean indicating if the content is a number.
   */
  isNumber = (index: number) =>
    computed(() => typeof this.content()[index].value === 'number');

  /**
   * Returns the string value of the content at the specified index.
   * @param index The index of the content.
   * @returns A computed string or null value.
   */
  returnString = (index: number) =>
    computed(() => this.content()[index].value as string | null);

  /**
   * Returns the number value of the content at the specified index.
   * @param index The index of the content.
   * @returns A computed number or null value.
   */
  returnNumber = (index: number) =>
    computed(() => this.content()[index].value as number | null);

  /**
   * Updates the content at the specified index with the given event value.
   * @param index The index of the content.
   * @param event The new value for the content.
   */
  updateContent = (index: number, event: string | number | null) => {
    const newContent = [...this.content()];
    newContent[index].value = event;
    this.changeEmitter.emit({ id: this.id(), content: newContent[index] });
  };
}
