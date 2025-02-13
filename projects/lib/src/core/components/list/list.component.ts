import { KeyValuePipe } from '@angular/common';
import { Component, model } from '@angular/core';
import { Text } from '../text/text.component';
import { Number } from '../number/number.component';
import { Button } from '../button/button.component';

@Component({
  selector: 'r-list',
  imports: [Text, Number, KeyValuePipe, Button],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class List {
  /** List of data to display */
  data =
    model.required<
      Record<
        string,
        { value: number | string | null; type: 'string' | 'number' }
      >[]
    >();

  /**
   * Checks if the value is a string.
   * @param value The value to check.
   * @returns True if the value is a string, false otherwise.
   */
  isString(value: string | number): boolean {
    return typeof value === 'string';
  }

  /**
   * Checks if the value is a number.
   * @param value The value to check.
   * @returns True if the value is a number, false otherwise.
   */
  isNumber(value: string | number): boolean {
    return typeof value === 'number';
  }

  /**
   * Returns the string value.
   * @param value The value object containing the string.
   * @returns The string value.
   */
  returnString(value: {
    value: number | string | null;
    type: 'string' | 'number';
  }): string {
    return value.value as string;
  }

  /**
   * Returns the number value.
   * @param value The value object containing the number.
   * @returns The number value.
   */
  returnNumber(value: {
    value: number | string | null;
    type: 'string' | 'number';
  }): number {
    return value.value as number;
  }

  /**
   * Updates the data at the specified index.
   * @param key The key of the data to update.
   * @param value The new value.
   * @param index The index of the data to update.
   */
  updateData(key: string, value: string | number | null, index: number) {
    const updatedData = [...this.data()];
    updatedData[index][key].value = value;
    this.data.set(updatedData);
  }

  /**
   * Adds a new item to the data list.
   */
  addItem() {
    if (this.data().length === 0) return;

    const newItem = Object.keys(this.data()[0]).reduce(
      (acc, key) => {
        acc[key] = {
          value: null,
          type:
            typeof this.data()[0][key].value === 'number' ? 'number' : 'string',
        };
        return acc;
      },
      {} as Record<
        string,
        { value: number | string | null; type: 'string' | 'number' }
      >
    );

    this.data.set([...this.data(), newItem]);
  }

  /**
   * Removes an item from the data list at the specified index.
   * @param index The index of the item to remove.
   */
  removeItem(index: number) {
    if (this.data().length === 0) return;
    const updatedData = [...this.data()];
    updatedData.splice(index, 1);
    this.data.set(updatedData);
  }
}
