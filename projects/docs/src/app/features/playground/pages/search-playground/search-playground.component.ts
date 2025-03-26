import { Component, signal } from '@angular/core';
import { Search, Option } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';
import { IArg } from '../../interfaces/arg.interface';

@Component({
  selector: 'app-search-playground',
  imports: [Search, Option, ArgsComponent],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <r-search
            [label]="args()[0].value()"
            [placeholder]="args()[1].value()"
            [invalid]="args()[2].value()"
            [disabled]="args()[3].value()"
            [(searching)]="args()[4].value"
            [(selectedValue)]="args()[5].value"
            [debounceTime]="args()[6].value()"
            [(searchValue)]="searchValue"
            (searchChange)="onSearchChange()"
            maxWidth="240px">
            @if (searchValue()) {
              @for (option of options; track option) {
                <option
                  r-option
                  [value]="option.value"
                  [disabled]="option.disabled">
                  {{ option.text }}
                </option>
              }
            }
          </r-search>
        </div>
        <!-- <app-code-block [code]="code()" /> -->
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class SearchPlaygroundComponent {
  readonly args = signal<IArg[]>([
    {
      label: 'Label',
      type: 'text',
      value: signal('Search'),
    },
    {
      label: 'Placeholder',
      type: 'text',
      value: signal('Type to search...'),
    },
    {
      label: 'Invalid',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Disabled',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Searching',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Selected Value',
      type: 'text',
      value: signal(''),
    },
    {
      label: 'Debounce Time',
      type: 'number',
      value: signal(500),
    },
  ]);

  readonly searchValue = signal<string>('');

  options = [
    { text: '', value: null, disabled: false },
    { text: 'Option 1', value: 'option1', disabled: false },
    { text: 'Option 2', value: 'option2', disabled: false },
    { text: 'Option 3', value: 'option3', disabled: true },
  ];

  onSearchChange() {
    this.args()[4].value.set(false);
  }
}
