import { Component, signal } from '@angular/core';
import { Select, Option } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';
import { IArg } from '../../interfaces/arg.interface';

@Component({
  selector: 'app-select-playground',
  imports: [Select, Option, ArgsComponent],
  template: `
    <div class="playground">
      <div class="component">
        <r-select
          [label]="args()[0].value()"
          [clearable]="args()[1].value()"
          [error]="args()[2].value()"
          [positioning]="args()[3].value()"
          [noResultsMessage]="args()[4].value()">
          @for (option of options; track option) {
            <r-option [value]="option.value" [disabled]="option.disabled">
              {{ option.label }}
            </r-option>
          }
        </r-select>
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class SelectPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Label',
      type: 'text',
      value: signal('Select an option'),
    },
    {
      label: 'Clearable',
      type: 'switch',
      value: signal(false),
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
  ]);

  options = [
    { label: 'Option 1', value: 'option1', disabled: false },
    { label: 'Option 2', value: 'option2', disabled: false },
    { label: 'Option 3', value: 'option3', disabled: true },
  ];
}
