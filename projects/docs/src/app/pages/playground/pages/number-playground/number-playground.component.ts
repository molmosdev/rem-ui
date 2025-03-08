import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Number } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';

@Component({
  selector: 'app-number-playground',
  imports: [Number, ArgsComponent],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <r-number
            [label]="args()[0].value()"
            [placeholder]="args()[1].value()"
            [value]="args()[2].value()"
            [valueType]="args()[3].value()"
            [suffix]="args()[4].value()"
            [error]="args()[5].value()"
            [disabled]="args()[6].value()">
          </r-number>
        </div>
        <!-- <app-code-block
          code="
          <r-number
            [label]='{{ args()[0].value() }}'
            [placeholder]='{{ args()[1].value() }}'
            [value]='{{ args()[2].value() }}'
            [valueType]='{{ args()[3].value() }}'
            [suffix]='{{ args()[4].value() }}'
            [error]='{{ args()[5].value() }}'
            [disabled]='{{ args()[6].value() }}'>
          </r-number>
          " /> -->
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class NumberPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Label',
      type: 'text',
      value: signal('Size'),
    },
    {
      label: 'Placeholder',
      type: 'text',
      value: signal(''),
    },
    {
      label: 'Value',
      type: 'text',
      value: signal(100),
      hidden: true,
    },
    {
      label: 'Value Type',
      type: 'select',
      value: signal('integer'),
      options: [
        { label: 'Integer', value: 'integer' },
        { label: 'Decimal', value: 'decimal' },
        { label: 'Currency', value: 'currency' },
        { label: 'Percentage', value: 'percentage' },
      ],
    },
    {
      label: 'Suffix',
      type: 'text',
      value: signal('cm'),
    },
    {
      label: 'Error',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Disabled',
      type: 'switch',
      value: signal(false),
    },
  ]);
}
