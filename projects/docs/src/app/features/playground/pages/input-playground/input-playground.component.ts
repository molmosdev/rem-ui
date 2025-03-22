import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { ArgsComponent } from '../../components/args/args.component';
import { Input } from '../../../../../../../lib/src/core/components/input/input.component';

@Component({
  selector: 'app-input-playground',
  imports: [Input, ArgsComponent],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <input
            r-input
            [type]="args()[0].value()"
            [placeholder]="args()[1].value()"
            [(value)]="args()[2].value"
            [disabled]="args()[3].value()"
            [numberType]="args()[4].value()"
            [decimals]="args()[5].value()"
            [invalid]="args()[6].value()"
            maxWidth="240px" />
        </div>
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class InputPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Type',
      type: 'select',
      value: signal('text'),
      options: [
        { text: 'Text', value: 'text' },
        { text: 'Number', value: 'number' },
        { text: 'Password', value: 'password' },
        { text: 'Email', value: 'email' },
      ],
    },
    {
      label: 'Placeholder',
      type: 'text',
      value: signal('Enter text'),
    },
    {
      label: 'Value',
      type: 'text',
      value: signal(''),
      hidden: true,
    },
    {
      label: 'Disabled',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Number Type',
      type: 'select',
      value: signal('integer'),
      options: [
        { text: 'Integer', value: 'integer' },
        { text: 'Decimal', value: 'decimal' },
      ],
    },
    {
      label: 'Decimals number',
      type: 'number',
      value: signal(2),
    },
    {
      label: 'Invalid',
      type: 'switch',
      value: signal(false),
    },
  ]);
}
