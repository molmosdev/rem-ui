import { Component, signal } from '@angular/core';
import { Search, Option } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';
import { IArg } from '../../interfaces/arg.interface';

@Component({
  selector: 'app-search-playground',
  imports: [Search, Option, ArgsComponent],
  template: `
    <div class="playground">
      <div class="component">
        <r-search
          [label]="args()[0].value()"
          [error]="args()[1].value()"
          [positioning]="args()[2].value()"
          [noResultsMessage]="args()[3].value()"
          [debounceDelay]="args()[4].value()">
          @for (option of options; track option) {
            <r-option [value]="option.value" [disabled]="option.disabled">
              {{ option.label }}
            </r-option>
          }
        </r-search>
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class SearchPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Label',
      type: 'text',
      value: signal('Search for an option'),
    },
    {
      label: 'Error',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Positioning',
      type: 'select',
      value: signal('down'),
      options: [
        { label: 'Down', value: 'down' },
        { label: 'Up', value: 'up' },
      ],
    },
    {
      label: 'No Results Message',
      type: 'text',
      value: signal('No results found'),
    },
    {
      label: 'Debounce Delay',
      type: 'number',
      value: signal(400),
    },
  ]);

  options = [
    { label: 'Option 1', value: 'option1', disabled: false },
    { label: 'Option 2', value: 'option2', disabled: false },
    { label: 'Option 3', value: 'option3', disabled: true },
  ];
}
