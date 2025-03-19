import { Component, computed, signal } from '@angular/core';
import { Option, Select } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';
import { IArg } from '../../interfaces/arg.interface';

@Component({
  selector: 'app-select-playground',
  imports: [Select, Option, ArgsComponent],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <r-select
            [label]="args()[0].value()"
            [invalid]="args()[1].value()"
            [disabled]="args()[2].value()"
            [value]="args()[3].value()"
            maxWidth="240px">
            @for (option of options; track option) {
              <option
                r-option
                [value]="option.value"
                [disabled]="option.disabled">
                {{ option.text }}
              </option>
            }
          </r-select>
        </div>
        <!-- <app-code-block [code]="code()" /> -->
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
      label: 'Selected Value',
      type: 'text',
      value: signal('option1'),
    },
  ]);

  options = [
    { text: '', value: null, disabled: false },
    { text: 'Option 1', value: 'option1', disabled: false },
    { text: 'Option 2', value: 'option2', disabled: false },
    { text: 'Option 3', value: 'option3', disabled: true },
  ];

  code = computed(() => {
    const optionsString = this.options
      .map(
        option => `
    <r-option [value]='${option.value}' [disabled]='${option.disabled}'>
      ${option.text}
    </r-option>
  `
      )
      .join('');
    return `
      <r-select
        [label]='"${this.args()[0].value()}"'
        [clearable]="${this.args()[1].value()}"
        [error]="${this.args()[2].value()}"
        [positioning]='"${this.args()[3].value()}"'
        [noResultsMessage]='"${this.args()[4].value()}"'>
        ${optionsString}
      </r-select>
    `;
  });
}
